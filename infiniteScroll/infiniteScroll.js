$(document).ready(function() {
    var gitHubDataLoaded = false
    var petDataLoaded = false
    
    /* Get Suncat's GitHub Repositories */

    $.ajax({
        url: "https://api.github.com/users/redsuncat/repos",
    }).done(function(response) {
        var delayDuration = 200
        $.each(response, function(i, v){
            const repoCard = $('<div>').addClass('col-lg-6').css('display', 'none')
            const repoCardContent = `
            <div class="card mt-4">
                <h5 class="card-header d-flex align-items-center justify-content-between">
                    <a href="${v.url}" class="text-danger">${v.name}</a>
                    <a href="${v.url}" class="btn btn-danger">Link</a>
                </h5>
                <div class="card-body">
                    <dl class="mb-0">
                        <dt>Description</dt>
                        <dd>${v.description}</dd>
                        <dt>Language</dt>
                        <dd>${v.language}</dd>
                        <dt>Created at</dt>
                        <dd>${v.created_at}</dd>
                        <dt>Updated at</dt>
                        <dd>${v.updated_at}</dd>
                    </dl>
                </div>
            </div>`
            repoCard.html(repoCardContent)
            $('#repo').append(repoCard)
            repoCard.delay(delayDuration).fadeIn()
            delayDuration += delayDuration
        })
        gitHubDataLoaded = true
        hideLoading()
    })

    /* Finding Pets Part (Infinite Scroll) */

    const renderedAmount = 6
    var lastItemNum = 0
    var windowHeight = $(window).innerHeight()
    var documentHeight = $(document).outerHeight()

    $(window).resize(function(){
        windowHeight = $(window).innerHeight()
        documentHeight = $(document).outerHeight()
    })
    
    /* `data.coa.gov.tw` does not has CORS settings */

    // $.ajax({
    //     url: "https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=IFJomqVzyB0i",
    // }).done(function(response) {
    //     console.log(response)
    // })

    /* Save to a json file because of CORS issue. */
    $.getJSON('findingPets.json', function(){ 
        format: "json"
    }).done(function(petsData) {
        renderPetsData(lastItemNum)

        $(window).scroll(function() {
            detectScrollToBottom()
        })

        $(window).bind('touchmove', function(e) {
            detectScrollToBottom()
        })

        function detectScrollToBottom () {
            clearTimeout($.data(this, 'scrollTimer'))
            $.data(this, 'scrollTimer', setTimeout(function() {
                if (($(window).scrollTop() + windowHeight) >= documentHeight) {
                    renderPetsData(lastItemNum)
                }
            }, 250))
        }

        function renderPetsData (startItem) {
            const stopItem = startItem + renderedAmount
            var delayDuration = 200
            for (i = startItem; i < stopItem; i++) {
                const pet = petsData[i]
                const petCard = $('<div>').addClass('col-sm-12 col-md-6 col-lg-4').css('display', 'none')
                const petCardContent = `
                <div class="card mt-4">
                    <h5 class="card-header">
                        <span class="badge badge-secondary">${pet.寵物別}</span>
                        <span class="badge badge-secondary">${pet.品種}</span>
                        <span class="badge badge-secondary">${pet.外觀}</span>
                        ${(pet.寵物名 ? pet.寵物名 : '(沒有名字)')}
                        ${((pet.性別 == '母') ? '<i class="fas fa-venus ml-1 text-danger"></i>' : '<i class="fas fa-mars ml-1 text-primary"></i>')}
                    </h5>
                    <div class="card-body">
                        ${pet.毛色 ? ('毛色：' + pet.毛色) : ''}
                        ${(pet.毛色 && pet.特徵) ? ' / ' : ''}
                        ${pet.特徵 ? ('特徵：' + pet.特徵) : ''}
                        ${(pet.毛色 || pet.特徵) ? '<hr />' : ''}
                        遺失於 ${pet.遺失時間}<br />
                        <i class="fas fa-map-marker-alt"></i> ${pet.遺失地點}
                        <hr/>
                        晶片號碼：${pet.晶片號碼}
                    </div>
                    <div class="card-footer">
                        ${pet.飼主姓名}
                        <span class="d-inline-block">
                            <i class="fas fa-phone-square-alt"></i> ${pet.連絡電話}
                            ${(pet.EMail) ? ('<i class="fas fa-envelope"></i> ' + pet.連絡電話) : ''}
                        </span>
                    </div>
                </div>`
                petCard.html(petCardContent)
                $('#pets').append(petCard)
                petCard.delay(delayDuration).fadeIn()
                delayDuration += delayDuration
            }

            // Update current last item number
            lastItemNum = lastItemNum + renderedAmount

            // Recount `documentHeight`
            documentHeight = $(document).outerHeight()
        }

        petDataLoaded = true
        hideLoading()
    })

    function hideLoading() {
        if (gitHubDataLoaded && petDataLoaded)
            $('#loading').fadeOut(1000, function(){
                $(this).removeClass('d-flex')
            })
    }
})