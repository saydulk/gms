function groupNewPage() {
    var join_gab_y = document.getElementById('join_gab_y');
    var join_gab_n = document.getElementById('join_gab_n');
    var include_listing_y = document.getElementById('include_listing_y');
    var include_listing_n = document.getElementById('include_listing_n');

    join_gab_y.onclick = function() {
        toggleGAB();
    }
    join_gab_n.onclick = function() {
        toggleGAB();
    }
    include_listing_y.onclick = function() {
        toggleList();
    }
    include_listing_n.onclick = function() {
        toggleList();
    }

    toggleGAB();
    toggleList();
}

function toggleGAB() {
    var join_gab_y = document.getElementById('join_gab_y');
    var join_gab_n = document.getElementById('join_gab_n');

    if ( join_gab_y.checked ) {
        showGAB(true);
    } else if ( join_gab_n.checked ) {
        showGAB(false);
    }
}

function showGAB(show) {
    if (show) {
        document.getElementById('gab').style.display = '';
    } else {
        document.getElementById('gab').style.display = 'none';
    }
}

function toggleList() {
    var include_listing_y = document.getElementById('include_listing_y');
    var include_listing_n = document.getElementById('include_listing_n');

    if ( include_listing_y.checked ) {
        showList(true);
    } else if ( include_listing_n.checked ) {
        showList(false);
    }
}

function showList(show) {
    if (show) {
        document.getElementById('listing').style.display = '';
    } else {
        document.getElementById('listing').style.display = 'none';
    }
}

addEventHandler ( window, 'load', function() {
    setTimeout (
        function() {
            groupNewPage();
        },
    1);
});
