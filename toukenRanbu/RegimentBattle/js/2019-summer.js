var awards = [
    {
        "amount": 200000,
        "award": "北谷菜切",
        "highlight": true
    },
    {
        "amount": 150000,
        "award": "手紙一式",
        "highlight": ""
    },
    {
        "amount": 145000,
        "award": "旅道具",
        "highlight": ""
    },
    {
        "amount": 140000,
        "award": "旅装束",
        "highlight": ""
    },
    {
        "amount": 135000,
        "award": "御札˙富士",
        "highlight": ""
    },
    {
        "amount": 130000,
        "award": "玉鋼 × 3000",
        "highlight": ""
    },
    {
        "amount": 125000,
        "award": "砥石 × 3000",
        "highlight": ""
    },
    {
        "amount": 120000,
        "award": "冷却材 × 3000",
        "highlight": ""
    },
    {
        "amount": 115000,
        "award": "木炭 × 3000",
        "highlight": ""
    },
    {
        "amount": 110000,
        "award": "手伝い札 × 5",
        "highlight": ""
    },
    {
        "amount": 105000,
        "award": "依頼札 × 3",
        "highlight": ""
    },
    {
        "amount": 100000,
        "award": "北谷菜切",
        "highlight": true
    },
    {
        "amount": 95000,
        "award": "蘇言機",
        "highlight": ""
    },
    {
        "amount": 90000,
        "award": "手紙一式",
        "highlight": ""
    },
    {
        "amount": 85000,
        "award": "手伝い札 × 2",
        "highlight": ""
    },
    {
        "amount": 80000,
        "award": "巴形薙刀",
        "highlight": true
    },
    {
        "amount": 75000,
        "award": "玉鋼 × 1500",
        "highlight": ""
    },
    {
        "amount": 70000,
        "award": "旅道具",
        "highlight": ""
    },
    {
        "amount": 67500,
        "award": "砥石 × 1500",
        "highlight": ""
    },
    {
        "amount": 65000,
        "award": "冷却材 × 1500",
        "highlight": ""
    },
    {
        "amount": 62500,
        "award": "木炭 × 1500",
        "highlight": ""
    },
    {
        "amount": 60000,
        "award": "旅装束",
        "highlight": ""
    },
    {
        "amount": 57500,
        "award": "兵糧丸",
        "highlight": ""
    },
    {
        "amount": 55000,
        "award": "銃兵˙特上",
        "highlight": ""
    },
    {
        "amount": 52500,
        "award": "三倍魚籠",
        "highlight": true
    },
    {
        "amount": 50000,
        "award": "浦島虎徹",
        "highlight": true
    },
    {
        "amount": 47500,
        "award": "投石兵˙特上",
        "highlight": ""
    },
    {
        "amount": 45000,
        "award": "手紙一式",
        "highlight": ""
    },
    {
        "amount": 42500,
        "award": "弓兵˙特上",
        "highlight": ""
    },
    {
        "amount": 40000,
        "award": "兵糧丸",
        "highlight": ""
    },
    {
        "amount": 37500,
        "award": "旅道具",
        "highlight": ""
    },
    {
        "amount": 35000,
        "award": "御札˙松",
        "highlight": ""
    },
    {
        "amount": 32500,
        "award": "盾兵˙特上",
        "highlight": ""
    },
    {
        "amount": 30000,
        "award": "旅装束",
        "highlight": ""
    },
    {
        "amount": 27500,
        "award": "青毛",
        "highlight": ""
    },
    {
        "amount": 25000,
        "award": "兵糧丸",
        "highlight": ""
    },
    {
        "amount": 22500,
        "award": "槍兵˙特上",
        "highlight": ""
    },
    {
        "amount": 20000,
        "award": "御札˙竹",
        "highlight": ""
    },
    {
        "amount": 18000,
        "award": "精鋭兵˙特上",
        "highlight": ""
    },
    {
        "amount": 16000,
        "award": "仙人団子",
        "highlight": ""
    },
    {
        "amount": 14000,
        "award": "重騎兵˙特上",
        "highlight": ""
    },
    {
        "amount": 12000,
        "award": "御札˙梅",
        "highlight": ""
    },
    {
        "amount": 10000,
        "award": "采配",
        "highlight": ""
    },
    {
        "amount": 9000,
        "award": "玉鋼 × 1000",
        "highlight": ""
    },
    {
        "amount": 8000,
        "award": "砥石 × 1000",
        "highlight": ""
    },
    {
        "amount": 7000,
        "award": "冷却材 × 1000",
        "highlight": ""
    },
    {
        "amount": 6000,
        "award": "木炭 × 1000",
        "highlight": ""
    },
    {
        "amount": 5000,
        "award": "三倍魚籠",
        "highlight": true
    },
    {
        "amount": 4000,
        "award": "遠征呼び戻し鳩",
        "highlight": ""
    },
    {
        "amount": 3000,
        "award": "鹿毛",
        "highlight": ""
    },
    {
        "amount": 2000,
        "award": "重歩兵˙特上",
        "highlight": ""
    },
    {
        "amount": 1000,
        "award": "手伝い札",
        "highlight": ""
    },
    {
        "amount": 750,
        "award": "軽騎兵˙特上",
        "highlight": ""
    },
    {
        "amount": 500,
        "award": "御札˙水砲",
        "highlight": ""
    },
    {
        "amount": 300,
        "award": "軽歩兵˙特上",
        "highlight": ""
    },
    {
        "amount": 100,
        "award": "三倍魚籠",
        "highlight": true
    },
    {
        "amount": 30,
        "award": "兵糧丸",
        "highlight": ""
    }
];
var period = {
    "startDate": '2019-07-30',
    "endDate": '2019-08-27'
};
var currentAmountEl = $('#currentAmount');
var awardProgressEl = $('#awardProgress');
var highlightCookie = $.cookie('toukenRanbuRegimentBattleHLArray');
var highlightCookieArray = [];

if (highlightCookie == undefined) {
    var highlightArray = [];
    $.each(awards, function(i, v) {
        if (v['highlight'] == true) {
            highlightArray.push(v['amount']);
        }
    });
    highlightCookieArray = highlightArray;
    $.cookie('toukenRanbuRegimentBattleHLArray', highlightCookieArray, {expires: 30});
}
else {
    highlightCookieArray = highlightCookie.split(',');
    $.each(highlightCookieArray, function(i, v) {
        highlightCookieArray[i] = parseInt(v);
    });
}

$.each(period, function(i, v){
    $('#' + i).text(v);
});
currentAmountEl.val($.cookie('toukenRanbuRegimentBattleAmount'));
createList();
currentAmountEl.change(function() {
    var currentAmount = $(this).val();
    var diffDays = getDiffDays();
    $.each(awards, function(i, v){
        var targetAmount = v['amount'];
        var numbers = getNumbers(targetAmount, currentAmount, diffDays);
        var entry = $('.progress[data-target="' + targetAmount + '"]');
        $('.progress-bar', entry).css('width', numbers['percentage'] + '%');
        $('.text sub', entry).text(numbers['percentage'] + '%');
        $('.daily', entry).html(numbers['dailyText']);
    });
    $.cookie('toukenRanbuRegimentBattleAmount', currentAmount, {expires: 30});
});
$('#addAmount').change(function(){
    var currentAmount = (currentAmountEl.val() == '' ? 0 : parseInt(currentAmountEl.val()))
    var newCurrentAmount = parseInt($(this).val()) + currentAmount;
    currentAmountEl.val(newCurrentAmount);
    currentAmountEl.trigger('change');
    $(this).val('');
});

function createList () {
    var currentAmount = currentAmountEl.val();
    var diffDays = getDiffDays();
    $.each(awards, function(i, v){
        var targetAmount = v['amount'];
        var numbers = getNumbers(targetAmount, currentAmount, diffDays);
        var html = 
        '<li class="progress mb-3 d-flex' + ((highlightCookieArray.includes(v['amount'])) ? ' hl' : '') + '" data-target="' + targetAmount + '">' +
            '<div class="progress-bar pt-1 pb-1" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: ' + numbers['percentage'] + '%;">' +
                '<span class="text">' +
                    '<sup class="mr-1">' + numberWithCommas(targetAmount) + '</sup>' +
                    v['award'] + 
                    ' <sub> / ' + numbers['percentage'] + '%</sub>' +
                '</span>' +
            '</div>' + 
            '<div class="daily">' + numbers['dailyText'] + '</div>' +
        '</li>';
        awardProgressEl.append(html);
    });
    $('li', awardProgressEl).click(function(){
        $(this).toggleClass('hl');
        var targetAmount = $(this).data('target');
        if (highlightCookieArray.includes(targetAmount)) {
            highlightCookieArray.pop(targetAmount);
        }
        else {
            highlightCookieArray.push(targetAmount);
        }
        $.cookie('toukenRanbuRegimentBattleHLArray', highlightCookieArray, {expires: 30});
    });
}
function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function getDiffDays () {
    var today = new Date();
    var endDate = new Date(period['endDate']);
    var diffTime = Math.abs(endDate.getTime() - today.getTime());
    var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) - 1;
    return diffDays;
}
function getNumbers (targetAmount, currentAmount, diffDays) {
    var percentage = Math.round(currentAmount / targetAmount * 100);
    percentage = (percentage > 100) ? 100 : percentage;
    var dailyAmount = Math.floor((targetAmount - currentAmount) / diffDays);
    var dailyText = (dailyAmount > 0) ? ('每天至少需 ' + numberWithCommas(dailyAmount) + ' 貝') : '<span class="text-white">Get!</span>';
    var numbers = {
        'percentage': percentage,
        'dailyText': dailyText
    }
    return numbers;
}