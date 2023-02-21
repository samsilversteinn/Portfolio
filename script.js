document.getElementById('lifeContentOne').style.display = 'none'; // Hides the first paragraph in the life section.
document.getElementById('lifeContentTwo').style.display = 'none'; // Hides the second paragraph in the life section.

function hidePanelsLife() {
    document.getElementById('lifeContentOne').style.display = 'none';
    document.getElementById('lifeContentTwo').style.display = 'none';
    document.getElementById('contentLifeOneTab').className = 'accordionPanelTab btn btn-outline-light btn-lg';
    document.getElementById('contentLifeTwoTab').className = 'accordionPanelTab btn btn-outline-light btn-lg';
} //It hides both the life paragraphs and removes any of the highlights/background from the buttons.

function showLifeContentOne() {
    hidePanelsLife();
    document.getElementById('lifeContentOne').style.display = 'block';
    document.getElementById('contentLifeOneTab').className = 'accordionPanelTab btn btn-outline-light btn-lg btn-primary';
} // When the button/tab is pressed with the onclick element, the hidePanelsLife() function is run as a reset and the paragraph is shown and the button is highlighted in blue.

function showLifeContentTwo() {
    hidePanelsLife();
    document.getElementById('lifeContentTwo').style.display = 'block';
    document.getElementById('contentLifeTwoTab').className = 'accordionPanelTab btn btn-outline-light btn-lg btn-primary';
} // When the button/tab is pressed with the onclick element, the hidePanelsLife() function is run as a reset and the paragraph is shown and the button is highlighted in blue.
document.getElementById('designContentOne').style.display = 'none'; // Hides the first paragraph in the design section.
document.getElementById('designContentTwo').style.display = 'none'; // Hides the first paragraph in the design section.

function hidePanelsDesign() {
    document.getElementById('designContentOne').style.display = 'none';
    document.getElementById('designContentTwo').style.display = 'none';
    document.getElementById('contentDesignOneTab').className = 'accordionPanelTab btn btn-outline-light btn-lg';
    document.getElementById('contentDesignTwoTab').className = 'accordionPanelTab btn btn-outline-light btn-lg';
} //It hides both the design paragraphs and removes any of the highlights/background from the buttons.

function showDesignContentOne() {
    hidePanelsDesign();
    document.getElementById('designContentOne').style.display = 'block';
    document.getElementById('contentDesignOneTab').className = 'accordionPanelTab btn btn-outline-light btn-lg btn-primary';
} // When the button/tab is pressed with the onclick element, the hidePanelsLife() function is run as a reset and the paragraph is shown and the button is highlighted in blue.

function showDesignContentTwo() {
    hidePanelsDesign();
    document.getElementById('designContentTwo').style.display = 'block';
    document.getElementById('contentDesignTwoTab').className = 'accordionPanelTab btn btn-outline-light btn-lg btn-primary';
} // When the button/tab is pressed with the onclick element, the hidePanelsLife() function is run as a reset and the paragraph is shown and the button is highlighted in blue.
