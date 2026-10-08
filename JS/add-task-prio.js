let btnUrgent = document.getElementById("btn-urgent");
let imgUrgent = document.getElementById("urgent-img");
let btnMedium = document.getElementById("btn-medium");
let imgMedium = document.getElementById("medium-img");
let btnLow = document.getElementById("btn-low");
let imgLow = document.getElementById("low-img");
let imgSources = {
    urgent: [
        "../Assets/prio_arrow_white.png",
        "../Assets/prio_line_orange.png",
        "../Assets/prio_low.png",
    ],
    medium: [
        "../Assets/prio_urgent.png",
        "../Assets/prio_medium.png",
        "../Assets/prio_low.png",
    ],
    low: [
        "../Assets/prio_urgent.png",
        "../Assets/prio_line_orange.png",
        "../Assets/prio_arrowDown_white.png",
    ],
};

/**
 * Ändert die Farbe und die Bildquelle der Prioritäts-Schaltflächen
 * basierend auf der ausgewählten Priorität.
 * @param {string} priority Die ausgewählte Priorität.
 */
function changeColorPrioBtn(priority) {
    let bgColors = {
        urgent: "#FF3B30",
        medium: "#FFA800",
        low: "#4CD964"
    };

    resetButtonStyles();
    selectedPriority = priority;
    setButtonStyles(priority, bgColors[priority]);
    setImageSources(imgSources[priority]);
}

/**
 * Setzt Hintergrund- und Textfarben der Prioritäts-Schaltflächen zurück.
 */
function resetButtonStyles() {
    btnUrgent.style.backgroundColor = "#ffffff";
    btnMedium.style.backgroundColor = "#ffffff";
    btnLow.style.backgroundColor = "#ffffff";

    btnUrgent.style.color = "#000000";
    btnMedium.style.color = "#000000";
    btnLow.style.color = "#000000";
}

/**
 * Setzt Hintergrundfarbe und weiße Schrift der ausgewählten Priorität.
 * @param {string} priority Die ausgewählte Priorität.
 * @param {string} bgColor Die gewünschte Hintergrundfarbe.
 */
function setButtonStyles(priority, bgColor) {
    if (priority === "urgent") {
        btnUrgent.style.backgroundColor = bgColor;
        btnUrgent.style.color = "#ffffff";
    } else if (priority === "medium") {
        btnMedium.style.backgroundColor = bgColor;
        btnMedium.style.color = "#ffffff";
    } else if (priority === "low") {
        btnLow.style.backgroundColor = bgColor;
        btnLow.style.color = "#ffffff";
    }
}

/**
 * Setzt die Bildquellen der Prioritätsbilder.
 * @param {Array<string>} imageSources Bildquellen für die Prioritäten.
 */
function setImageSources([urgentImgSrc, mediumImgSrc, lowImgSrc]) {
    imgUrgent.src = urgentImgSrc;
    imgMedium.src = mediumImgSrc;
    imgLow.src = lowImgSrc;
}