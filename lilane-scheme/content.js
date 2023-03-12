const clothingElements = document.querySelectorAll("li");
const banners = document.querySelectorAll("div");

const background = document.getElementById("container-main");

const elements = document.querySelectorAll('.gotham-font .text');

const gameInstances = document.getElementById("game-instances");

const cardItem = document.querySelectorAll('[class*="card-item"]');

const robux = document.querySelectorAll(".btn-growth-md .btn-full-width .unsubscribed .badge-container .ng-scope");

let navigation = document.getElementById("navigation");
let header = document.querySelector(".navbar-fixed-top .rbx-header");

const containerFooter = document.querySelectorAll(".container-footer");

const gamePage = document.querySelector(".game-home-page-container");

let sectionContent = document.querySelectorAll(".section-content");

if (robux)
{
    robux.forEach(bttn => {
        bttn.style.boxShadow = "0px 0px 100px #00b06f"
    })
}

if (gamePage)
{
    gamePage.style.backgroundColor = "#121212";
}

if (sectionContent)
{
    sectionContent.forEach(element => {
        element.style.backgroundColor = "#151515";
        element.style.borderRadius = "5px";
    })
}

const imgs = document.querySelectorAll('.thumbnail-2d-container img');
const imgBackgrounds = document.querySelectorAll('.dark-theme .thumbnail-2d-container');

if (containerFooter)
{
    containerFooter.forEach(footer => {
        footer.style.backgroundColor = "#141414"
    })
}

if (gameInstances)
{
    gameInstances.style.backgroundColor = "#151515";
}

setInterval(function() {
    const cardItems = document.querySelectorAll('.card-item');
    const playButton = document.querySelector(".btn-full-width.btn-common-play-game-lg.btn-primary-md.btn-min-width");

    const content = document.getElementsByClassName("content")[0];

    const headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

    navigation = document.getElementById("navigation");
    header = document.getElementById("header");

    sectionContent = document.querySelectorAll(".section-content");
    
    if (navigation)
    {
        navigation.style.backgroundColor = "#151515"
    }

    if (header)
    {
        navigation.style.backgroundColor = "#141414"
    }

    if (content)
    {
        content.style.backgroundColor = "#121212"
    }

    if (headers)
    {
        headers.forEach(header => {
            header.style.textShadow = "0px 0px 10px"
        })
    }

    if (sectionContent)
    {
        sectionContent.forEach(element => {
            element.style.backgroundColor = "#151515";
            element.style.borderRadius = "5px";
        })
    }

    if (playButton) {
        playButton.style.transition = "all .25s";
        playButton.style.boxShadow = "0px 0px 50px 50px #00b06f0f";

        playButton.addEventListener('mouseenter', () => {
            playButton.style.backgroundColor = "#008453";
            playButton.style.borderColor = "#008453";
        })

        playButton.addEventListener('mouseleave', () => {
            playButton.style.backgroundColor = "#00b06f";
            playButton.style.borderColor = "#00b06f";
        })
    }

    if (cardItems) {
        cardItems.forEach(function(item) {
            item.style.borderRadius = '5px';
            item.style.backgroundColor = '#121212';
        });
    }
}, 1000);

if (cardItem) {
    cardItem.forEach(card => {
        card.style.borderRadius = "5px";
        card.style.backgroundColor = "#121212";
    })
}

if (imgs) {
    imgs.forEach(img => {
        img.style.borderRadius = "5px";
    })
}

if (imgBackgrounds) {
    imgBackgrounds.forEach(imgBG => {
        imgBG.style.backgroundColor = "rgba(0,0,0,0)";
    })
}

if (elements) {
    elements.forEach(element => {
        element.style.textShadow = "0px 0px 10px";
    });
}

if (background) {
    background.style.backgroundColor = "#121212"
}

//const ul = document.querySelectorAll("ul");

//var settings_bttn = document.getElementById("settings-popover-menu");

// filter the h3 elements to find those that contain the text "Passes"
/*const h3ElementsWithPasses = Array.prototype.filter.call(foundh3__cool__Text, h3 => {
    return h3.textContent.includes("Passes");
})/*

const clothingElementsFiltered = Array.prototype.filter.call(clothingElements, li => {
    return (li.textContent.includes("Classic Shirts") || li.textContent.includes("Classic Pants") || li.textContent.includes("Classic T-Shirts"));
});

const actualBanners = Array.prototype.filter.call(clothingElements, div => {
    return (div.className == "banner-container")
});

/*const isSettings = Array.prototype.filter.call(ul, _ul => {
    return (_ul.id.includes("settings-popover-menu"));
});*/

// replace the text of each h3 element with "Downloadable Content"
h3ElementsWithPasses.forEach(h3 => {
    h3.textContent = "Downloadable Content";
});

actualBanners.forEach(div => {
    div.remove();
});

clothingElementsFiltered.forEach(li => {
    const textContent = li.textContent
    const filteredContent = textContent.replace("Classic ", '')

    li.textContent = filteredContent;
});

/*isSettings.forEach(_ul => {
    var RailwyndSettingsBttn = document.createElement("li");
    settingsPopoverMenu.appendChild(newListItem);

    var BttnContent = Document.createElement("a");
    BttnContent.classList.add("rbx-menu-item");
    BttnContent.innerHTML = "Railwynd Settings";

    BttnContent.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
});*/