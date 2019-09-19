$(document).ready(function() {
    /* Get Suncat's GitHub Repositories */

    $.ajax({
        url: "https://api.github.com/users/redsuncat/repos",
    }).done(function(response) {
        $.each(response, function(i, v){
            const repoCard = `
            <div class="col-lg-6"><div class="card mt-4">
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
            </div></div>`
            $('#repo').append(repoCard)
        })
    })

    /* Finding Pets Part (Infinite Scroll) */

    const renderedItems = 12
    var lastItem = 0
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
        renderPetsData(lastItem)

        $(window).scroll(function() {
            clearTimeout($.data(this, 'scrollTimer'))
            $.data(this, 'scrollTimer', setTimeout(function() {
                if ($(window).scrollTop() + windowHeight >= documentHeight) {
                    renderPetsData(lastItem)
                }
            }, 250))
        })

        function renderPetsData (startItem) {
            for (i = startItem; i < startItem + renderedItems; i++) {
                const pet = petsData[i]
                const petCard = `
                <div class="col-sm-12 col-md-6 col-lg-4"><div class="card mt-4">
                    <h5 class="card-header">
                        <span class="badge badge-secondary">${pet.寵物別}</span>
                        <span class="badge badge-secondary">${pet.品種}</span>
                        <span class="badge badge-secondary">${pet.外觀}</span>
                        ${((pet.寵物名) ? pet.寵物名 : '(沒有名字)')}
                        ${((pet.性別 == '母') ? '<i class="fas fa-venus ml-1 text-danger"></i>' : '<i class="fas fa-mars ml-1 text-primary"></i>')}
                    </h5>
                    <div class="card-body">
                        ${(pet.毛色) ? ('毛色：' + pet.毛色) : ''}
                        ${(pet.毛色 && pet.特徵) ? ' / ' : ''}
                        ${(pet.特徵) ? ('特徵：' + pet.特徵) : ''}
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
                </div></div>`
                $('#pets').append(petCard)
            }
            lastItem = lastItem + renderedItems

            // Recount `documentHeight`
            documentHeight = $(document).outerHeight()
        }
    })
})