const API_KEY = 'AIzaSyAd9TyDCjTlhsarwfj3Yv4cVBJhKMYVSq4'; // Replace with your API key
const SHEET_ID = '1V_9ovc7BlsDZRLLW41Y9fAVM8LW2mjYx7VJVS9MGQvI'; // Replace with your Sheet ID (from URL)

const RANGE = 'PANEL!A3:K680'; // Specify the range you want to retrieve
const GLASS_SIMPLE_RANGE = 'GLASS-SIMPLE!A2:D15'; // Range for Glass Simple options
const GLASS_TRIPLEX_RANGE = 'GLASS-TRIPLEX!A2:D5'; // Range for Glass Triplex options
const PANEL_COLORS_RANGE = 'DIMENSIONS!A2:G13'; // Range for Glass Triplex options
const COLORS_RANGE = 'COLORS!A2:G30';
const WIDTH_RANGE = 'WIDTH!A2:F35';

/*const dataOutput = document.getElementById('data-output');
const resultDiv = document.getElementById('result');
const selectElement = document.getElementById('panel_line'); */

const panelLineSelect = document.getElementById('panel_line');
const panelModelSelect = document.getElementById('panel_model');
const descriptionText = document.getElementById('panel_model_description');
const dimensionText = document.getElementById('panel_model_dimension');
const dimensionText2 = document.getElementById('current_panel_dimension');


const costText = document.getElementById('panel_model_cost');
const glassesText = document.getElementById('model_glass_num');
const glassTypeText = document.getElementById('model_glass_type');
const glassCostDiv = document.getElementById('glass_cost');  // Div to display the glass cost
const triplexCostDiv = document.getElementById('triplex_cost');  // Div to display the glass cost

// Glass select elements
const glassSimpleSelect = document.getElementById('glass_simple');
const glassSimpleSelectDiv = document.getElementById('glass_simple_div');
const glassTriplexSelect = document.getElementById('glass_triplex');
const glassTriplexSelectDiv = document.getElementById('glass_triplex_div');

const glassMotivSelect = document.getElementById('glass_motiv');
const glassMotivDiv = document.getElementById('glass_motiv_section');

// Color select elements
const colorSelect = document.getElementById('panel_color');
const subColorSelect = document.getElementById('subColor');
const subColorSelectDiv = document.getElementById('subColorDiv');
const subNoColorDiv = document.getElementById('subNoColorDiv');

const colorInSelect = document.getElementById('panel_color_in');
const subColorInSelect = document.getElementById('subColorIn');
const subColorInSelectDiv = document.getElementById('subColorInDiv');
const subNoColorInDiv = document.getElementById('subNoColorInDiv');

const panelWidthSelect = document.getElementById('panelWidth');
const panelColorInSelectDiv = document.getElementById('panelColorInDiv');


const panelCutCostSelect = document.getElementById('panel_cut');
const panelCutCostText = document.getElementById('panelCutCost');
const panelCutDiv = document.getElementById('panelCutDiv');

const panelExtraCost = document.getElementById('panelExtraCost');

const panelColorOutCost = document.getElementById('panelColorOutCost');
const panelColorInCost = document.getElementById('panelColorInCost');

const panelInoxCostSelect = document.getElementById('inox_316');
const panelInoxCostText = document.getElementById('panelInoxCost');

const panelDimensionsSelect = document.getElementById('panel_dimensions');
const panelDimensionsList = ['450X2100', '500X2250', '900X1050', '900X2100', '1000X2250'];

const panelColorOutInSwitch = document.querySelectorAll('input[name="panelColorOutInOption"]');


let panelData  = []; // To hold the complete data set (Panel Line and Model)
let glassSimpleOptions = []; // For Glass Simple options
let glassTriplexOptions = []; // For Glass Triplex options
let glassMotivFlag = ""; // For Glass Triplex options

let panelColorOptions = [];
let subColorOptions = [];
let subColorFlag = "";
let panelWidthOptions = [];

let currentPanelModel = "";
let currentPanelDimension = "";
let currentPanelFrame = "";
let currentPanelFlat = "";

let currentGlassNum = "";
let currentGlassType = "";
let currentGlassTriplex = "";

let currentColorOutCost = "";
let currentColorInCost = "";


// Function to fetch data from Google Sheets
async function fetchData() {
	try {
		const response = await fetch("https://sheets.googleapis.com/v4/spreadsheets/"+SHEET_ID+"/values/"+RANGE+"?key="+API_KEY);
		const data = await response.json();
		panelData = data.values;
		
		 // Fetch glass options (simple and triplex)
        await fetchGlassOptions();
		await fetchPanelColors();
		await fetchSubColors();
		await fetchPanelWidths();
		
		const distinctPanelLines = getDistinctPanelLines(panelData);
		populatePanelLineSelect(distinctPanelLines);
	} catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Fetch Glass Options for both simple and triplex types
async function fetchGlassOptions() {
    try {
        const glassSimpleResponse = await fetch("https://sheets.googleapis.com/v4/spreadsheets/"+SHEET_ID+"/values/"+GLASS_SIMPLE_RANGE+"?key="+API_KEY);
        const glassSimpleData = await glassSimpleResponse.json();
        glassSimpleOptions = glassSimpleData.values; // Flatten array to get glass simple options

        const glassTriplexResponse = await fetch("https://sheets.googleapis.com/v4/spreadsheets/"+SHEET_ID+"/values/"+GLASS_TRIPLEX_RANGE+"?key="+API_KEY);
        const glassTriplexData = await glassTriplexResponse.json();
        glassTriplexOptions = glassTriplexData.values; // Flatten array to get glass triplex options

    } catch (error) {
        console.error('Error fetching glass options:', error);
    }
}

async function fetchPanelColors() {
    try {
        const panelColorsResponse = await fetch("https://sheets.googleapis.com/v4/spreadsheets/"+SHEET_ID+"/values/"+PANEL_COLORS_RANGE+"?key="+API_KEY);
        const panelColorsData = await panelColorsResponse.json();
        panelColorOptions = panelColorsData.values; // Flatten array to get glass simple options
    } catch (error) {
        console.error('Error fetching color options:', error);
    }
}

async function fetchSubColors() {
    try {
        const subColorsResponse = await fetch("https://sheets.googleapis.com/v4/spreadsheets/"+SHEET_ID+"/values/"+COLORS_RANGE+"?key="+API_KEY);
        const subColorsData = await subColorsResponse.json();
        subColorOptions = subColorsData.values; // Flatten array to get glass simple options
    } catch (error) {
        console.error('Error fetching sub color options:', error);
    }
}

async function fetchPanelWidths() {
    try {
        const panelWidthResponse = await fetch("https://sheets.googleapis.com/v4/spreadsheets/"+SHEET_ID+"/values/"+WIDTH_RANGE+"?key="+API_KEY);
        const panelWidthData = await panelWidthResponse.json();
        panelWidthOptions = panelWidthData.values; // Flatten array to get glass simple options
		 console.log("Fetched Panel Widths:", panelWidthOptions); // Check data format
    } catch (error) {
        console.error('Error fetching panel widths:', error);
    }
}

//LINE & PANEL
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function to extract distinct panel lines (Column A)
function getDistinctPanelLines(data) {
    const set = new Set(); // Use a Set to store distinct values
    for (let i = 0; i < data.length; i++) { // Skip header (first row)
		set.add(data[i][0]); // Add Panel Line (Column A) to the set
		//console.log(set.add(data[i][0]));
    }
    return Array.from(set); // Convert the Set back to an array
}

// Populate the Panel Line select element
function populatePanelLineSelect(panelLines) {
    panelLines.forEach(line => {
        const option = document.createElement('option');
        option.value = line;
        option.textContent = line;
        panelLineSelect.appendChild(option);
    });
}

// Listen for changes on the Panel Line select element
panelLineSelect.addEventListener('change', function() {
    const selectedPanelLine = panelLineSelect.value;
    if (selectedPanelLine) {
        const filteredModels = getModelsByPanelLine(selectedPanelLine);
        populatePanelModelSelect(filteredModels);
        clearDetails(); // Clear details (Description, Dimension, Cost, Glasses, Type of Glass) when panel line changes
    } else {
        panelModelSelect.innerHTML = '<option value="">--Select a Panel Model--</option>'; // Reset if no Panel Line selected
        clearDetails(); // Clear details if no line is selected
    }
});

// Function to filter models based on selected Panel Line
function getModelsByPanelLine(panelLine) {
    return panelData
        .filter(row => row[0] === panelLine) // Filter rows where Panel Line matches
        .map(row => row[1]); // Extract Panel Model (Column B)
}

// Populate the Panel Model select element
function populatePanelModelSelect(models) {
    panelModelSelect.innerHTML = '<option value="">--Select a Panel Model--</option>'; // Reset
    models.forEach(model => {
        const option = document.createElement('option');
        option.value = model;
        option.textContent = model;
        panelModelSelect.appendChild(option);
    });
}

// Listen for changes on the Panel Model select element
panelModelSelect.addEventListener('change', function() {
    const selectedPanelLine = panelLineSelect.value;
    const selectedPanelModel = panelModelSelect.value;
	clearDetails();
	
	
    if (selectedPanelLine && selectedPanelModel) {
        const panelData = getDetailsByLineAndModel(selectedPanelLine, selectedPanelModel);
		displayDetails(panelData);
		
		currentPanelDimension = panelData.dimension;
		currentPanelModel = selectedPanelModel;
		currentGlassNum = panelData.glasses;
		currentGlassType = panelData.glassType;
		currentGlassTriplex = panelData.hasTriplex;
		currentPanelFlat = panelData.flat;
		
		handleDimensionRestrictions(panelData.flag);
        //handleColorSelectionByCode(currentPanelModel);
		        
        handleGlassOptions(panelData.glasses, panelData.glassType, panelData.hasTriplex);
		populateGlassOptions(glassSimpleSelect, glassSimpleOptions);
		populateGlassOptions(glassTriplexSelect, glassTriplexOptions);
		populateColorOptions(colorSelect, panelColorOptions, panelData.dimension, panelData.frames);
		populateColorOptions(colorInSelect, panelColorOptions, panelData.dimension, panelData.frames);
		populateWidthOptions(panelWidthSelect, panelWidthOptions);
    } else {
        clearDetails(); // Clear if no valid selection
    }
});

// Function to get details (Description, Dimension, Cost, Glasses, Glass Type) based on Panel Line and Model
function getDetailsByLineAndModel(panelLine, panelModel) {
    const row = panelData.find(row => row[0] === panelLine && row[1] === panelModel);
    return row ? {
        description: row[2],    // Column C (Description)
        dimension: row[3],      // Column D (Dimension)
        cost: row[4],           // Column E (Cost)
        glasses: row[5],        // Column F (Number of Glasses)
        glassType: row[6],       // Column G (Type of Glass)
		hasTriplex: row[7],      // Column H (Yes or No for Triplex option)
		flag: row[8],  // Dimension restrictions
		frames: parseInt(row[9]) || 0,
		flat: row[10]
    } : {}; // Return an empty object if not found
}



// Display the details (Description, Dimension, Cost, Glasses, Glass Type) in their respective divs
function displayDetails(data) {
    descriptionText.textContent = data.description || '--No description available--';
    dimensionText.textContent = data.dimension || '--No dimension available--';
    dimensionText2.textContent = data.dimension || '--No dimension available--';
    costText.textContent = data.cost || '--No cost available--';
    glassesText.textContent = data.glasses || '--No glass info available--';
    glassTypeText.textContent = data.glassType || '--No glass type info available--';
}

//GLASS
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Handle glass options logic
function handleGlassOptions(numberOfGlasses, glassType, glassTriplex) {
    const glassSimpleSelect = document.getElementById('glass_simple_div');
    const glassTriplexSelect = document.getElementById('glass_triplex_div');
    const totalGlassCostDiv = document.getElementById('glass_cost');

    let simpleGlassCost = 0;
    let triplexGlassCost = 0;

    // Show/hide and set glass cost based on conditions
    if (numberOfGlasses >= 1) {
        if (glassType === 'SIMPLE') {
            glassSimpleSelect.style.display = 'block';
			glassCostDiv.style.display = 'none';
            //simpleGlassCost = 0; // Do not charge cost for simple glass
        } else if (glassType === 'NO') {
            glassSimpleSelect.style.display = 'block';
			glassCostDiv.style.display = 'inline';
            //simpleGlassCost = getGlassSimpleCost(); // Charge cost for no-glass
        } else if (glassType === 'STANDAR') {
            glassSimpleSelect.style.display = 'none'; // Hide for standar glass
			glassCostDiv.style.display = 'none';
        }

        // Triplex glass logic
        if (glassTriplex === 'YES') {
            glassTriplexSelect.style.display = 'block';
            //triplexGlassCost = getGlassTriplexCost(); // Charge cost for triplex
			triplexCostDiv.style.display = 'inline';
        } else {
            glassTriplexSelect.style.display = 'none';
			triplexCostDiv.style.display = 'none';
        }
    } else {
        glassSimpleSelect.style.display = 'none';
		glassCostDiv.style.display = 'none';
		
        glassTriplexSelect.style.display = 'none';
		triplexCostDiv.style.display = 'none';
    }

    // Calculate and display the total glass cost
    //const totalGlassCost = simpleGlassCost + triplexGlassCost;
    //totalGlassCostDiv.textContent = `Total Glass Cost: ${totalGlassCost} Euros`;
}

// Function to get selected cost for Glass Simple
function getGlassSimpleCost() {
    const glassSimpleSelect = document.getElementById('glass_simple');
    const selectedOption = glassSimpleSelect.options[glassSimpleSelect.selectedIndex];
    return selectedOption ? parseFloat(selectedOption.getAttribute('data-cost')) : 0;
}

// Function to get selected cost for Glass Triplex
function getGlassTriplexCost() {
    const glassTriplexSelect = document.getElementById('glass_triplex');
    const selectedOption = glassTriplexSelect.options[glassTriplexSelect.selectedIndex];
    return selectedOption ? parseFloat(selectedOption.getAttribute('data-cost')) : 0;
}


// Populate select element with glass options (name and cost info)
function populateGlassOptions(selectElement, options) {
    selectElement.innerHTML = '<option value="">--Select Glass--</option>'; // Reset options
    options.forEach(option => {
        const opt = document.createElement('option');
        // Storing option name and cost as data attributes
        opt.value = option[0];  // Glass option name
        opt.setAttribute('data-cost-1', option[1]);  // Cost for 1 glass
        opt.setAttribute('data-cost-2', option[2]);  // Cost for 2 glasses
        opt.setAttribute('data-cost-3', option[3]);  // Cost for 3 glasses
        opt.textContent = option[0];  // Display only the name of the glass option
        selectElement.appendChild(opt);
    });
}

// Event listener for Glass Simple Select box
glassSimpleSelect.addEventListener('change', function() {
    displayGlassCost(glassSimpleSelect);
	handleGlassOptions(currentGlassNum, currentGlassType, currentGlassTriplex);
});

// Event listener for Glass Triplex Select box
glassTriplexSelect.addEventListener('change', function() {
    displayTriplexCost(glassTriplexSelect);
	handleGlassOptions(currentGlassNum, currentGlassType, currentGlassTriplex);
});

// Function to display glass cost based on number of glasses and selected glass option
function displayGlassCost(selectElement) {
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const numberOfGlasses = parseInt(glassesText.textContent);  // Get the number of glasses from the panel data

    let cost;
    if (numberOfGlasses === 1) {
        cost = selectedOption.getAttribute('data-cost-1');
    } else if (numberOfGlasses === 2) {
        cost = selectedOption.getAttribute('data-cost-2');
    } else if (numberOfGlasses === 3) {
        cost = selectedOption.getAttribute('data-cost-3');
    }

    // Display the glass cost in the appropriate div
    if (cost) {
        glassCostDiv.textContent = cost;
    } else {
        glassCostDiv.textContent = '--Select a Glass Option--';
    }
}

function displayTriplexCost(selectElement) {
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const numberOfGlasses = parseInt(glassesText.textContent);  // Get the number of glasses from the panel data

    let cost;
    if (numberOfGlasses === 1) {
        cost = selectedOption.getAttribute('data-cost-1');
    } else if (numberOfGlasses === 2) {
        cost = selectedOption.getAttribute('data-cost-2');
    } else if (numberOfGlasses === 3) {
        cost = selectedOption.getAttribute('data-cost-3');
    }

    // Display the glass cost in the appropriate div
    if (cost) {
        triplexCostDiv.textContent = cost;
    } else {
        triplexCostDiv.textContent = '--Select a Glass Option--';
    }
}

//PANEL COLORS AND DIMENSIONS
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////





//DIMENSIONS
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Handle Dimension Restrictions
function handleDimensionRestrictions(flag) {
    let dimensions;
    switch (flag) {
        case "YES":
            dimensions = ["900X2100", "1000X2250"];
            break;
        case "NO":
            dimensions = ["900X2100"];
            break;
        case "YES-H":
            dimensions = ["450X2100", "500X2250"];
            break;
        case "NO-H":
            dimensions = ["450X2100"];
            break;
        case "YES-R":
            dimensions = ["450X2100", "900X1050", "500X2250", "1250X1250"];
            break;
        default:
            dimensions = [];
    }
    populatePanelDimensions(dimensions);
}

// Populate panel dimensions dropdown
function populatePanelDimensions(dimensions) {
    panelDimensionsSelect.innerHTML = '<option value="">--Select Panel Dimension--</option>';
    dimensions.forEach(dimension => {
        const option = document.createElement('option');
        option.value = dimension;
        option.textContent = dimension;
        panelDimensionsSelect.appendChild(option);
    });
}

// Handle changes on panel dimensions select
panelDimensionsSelect.addEventListener('change', function () {
    const selectedDimension = panelDimensionsSelect.value;
    if (selectedDimension) {
		
		if (selectedDimension == "1000X2250") {
			panelExtraCost.style.display = 'block';
			document.getElementById('panelExtraCost').textContent = '29,00 €';
		}
		else {
			panelExtraCost.style.display = 'none';
			document.getElementById('panelExtraCost').textContent = '0';
		}
		
		handleColorSelectionByCode(currentPanelModel);
		
        populateWidthOptions2(panelWidthSelect, panelWidthOptions, selectedDimension);
		currentPanelDimension = selectedDimension;
		console.log(currentPanelDimension);
    }
});




//COLORS
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Handle Color Selection by Panel Code Suffix
async function handleColorSelectionByCode(panelCode) {
	try {
		
		console.log("Panel Code: " + panelCode);
		
		let colorsRange;
		let colorType;
		
		if (panelCode.endsWith("X")) {
			colorsRange = 'COLORS-X!A2:A20';
			colorType = 'colors-x';
			//glassMotivFlag = "YES";
			glassMotivDiv.style.display = 'block';
		} else if (panelCode.endsWith("F")) {
			colorsRange = 'COLORS-F!A2:A30';
			colorType = 'colors-f';
			//glassMotivFlag = "YES";
			glassMotivDiv.style.display = 'block';
		} else {
			colorsRange = 'DIMENSIONS!A2:G60';
			colorType = 'colors-d';
			//subColorFlag = "NO";
			glassMotivDiv.style.display = 'none';
		}
		
		console.log("Panel Code sheet: " + colorsRange);

		try {
			const colorResponse = await fetch("https://sheets.googleapis.com/v4/spreadsheets/"+SHEET_ID+"/values/"+colorsRange+"?key="+API_KEY);
			const colorData = await colorResponse.json();
			panelColorOptions = colorData.values;
			
			switch (colorType) {
				case 'colors-x': {
					//populateColorOptions(colorSelect, panelColorOptions, currentPanelDimension);
					populateColorOptions2(glassMotivSelect, panelColorOptions); break;
				}
				case 'colors-f': {
					//populateColorOptions(colorSelect, panelColorOptions, currentPanelDimension);
					populateColorOptions2(glassMotivSelect, panelColorOptions); break;
				}
				case 'colors-d': {
					populateColorOptions(colorSelect, panelColorOptions, currentPanelDimension, currentPanelFrame); 
					populateColorOptions(colorInSelect, panelColorOptions, currentPanelDimension, currentPanelFrame); break;
				}
				
				
			}
		} catch (error) {
			console.error('Error fetching color options:', error);
		}
	} catch (error) {
        console.error('Error fetching colors sheet:', error);
    }
}


// Populate Color Options
function populateColorOptions(selectElement, options, panelDimension, numberOfFrames) {
	try {
		selectElement.innerHTML = '<option value="">--Select Color--</option>';
		
		const lastThreeOptions = options.slice(-3); // Get the last three color options
        const regularOptions = options.slice(0, -3); // Get all other options except the last three

        // Process regular color options
        regularOptions.forEach(option => {
            const colorName = option[0];
            let cost;

            // Determine cost based on the panel dimension
            switch (panelDimension) {
                case '450X2100': cost = option[1]; break;
                case '900X1050': cost = option[2]; break;
                case '500X2250': cost = option[3]; break;
                case '1250X1250': cost = option[4]; break;
                case '900X2100': cost = option[5]; break;
                case '1000X2250': cost = option[6]; break;
                default: cost = null;
            }
			
			if ( currentPanelFlat == "YES"  ) {

				if (cost && parseFloat(cost) > 0 ) {
					const opt = document.createElement('option');
					opt.value = colorName;
					opt.setAttribute('data-cost', cost);
					opt.textContent = colorName + "-" + cost;
					selectElement.appendChild(opt);
				}
			}
			if ( currentPanelFlat == "NO"  ) {

				if (cost && parseFloat(cost) > 0 && colorName != "ΒΑΦΗ ΞΥΛΟΥ ΕΠΙΠΕΔΑ") {
					const opt = document.createElement('option');
					opt.value = colorName;
					opt.setAttribute('data-cost', cost);
					opt.textContent = colorName + "-" + cost;
					selectElement.appendChild(opt);
				}
			}
        });
		

        // Process last three color options based on number of frames
        lastThreeOptions.forEach((option, index) => {
            const colorName = option[0];
            let cost;

            // Select the appropriate cost based on the number of frames
            if (numberOfFrames === 1 && index === 0) {
				currentPanelFrame = 1;
                switch (panelDimension) {
                case '450X2100': cost = option[1]; break;
                case '900X1050': cost = option[2]; break;
                case '500X2250': cost = option[3]; break;
                case '1250X1250': cost = option[4]; break;
                case '900X2100': cost = option[5]; break;
                case '1000X2250': cost = option[6]; break;
                default: cost = null;
            }
            } else if (numberOfFrames === 2 && index === 1) {
				currentPanelFrame = 2;
                switch (panelDimension) {
                case '450X2100': cost = option[1]; break;
                case '900X1050': cost = option[2]; break;
                case '500X2250': cost = option[3]; break;
                case '1250X1250': cost = option[4]; break;
                case '900X2100': cost = option[5]; break;
                case '1000X2250': cost = option[6]; break;
                default: cost = null;
            }
            } else if (numberOfFrames >= 3 && index === 2) {
				currentPanelFrame = 3;
                switch (panelDimension) {
                case '450X2100': cost = option[1]; break;
                case '900X1050': cost = option[2]; break;
                case '500X2250': cost = option[3]; break;
                case '1250X1250': cost = option[4]; break;
                case '900X2100': cost = option[5]; break;
                case '1000X2250': cost = option[6]; break;
                default: cost = null;
            }
            }

            // Only add the color to the dropdown if the cost is greater than zero
            if (cost && parseFloat(cost) > 0) {
                const opt = document.createElement('option');
                opt.value = colorName;
                opt.setAttribute('data-cost', cost);
                opt.textContent = colorName + "-" + cost;
                selectElement.appendChild(opt);
            }
		 });
		
		/*options.forEach(option => {
			const colorName = option[0];
			let cost;
			switch (panelDimension) {
				case '450X2100': cost = option[1]; break;
				case '900X1050': cost = option[2]; break;
				case '500X2250': cost = option[3]; break;
				case '1250X1250': cost = option[4]; break;
				case '900X2100': cost = option[5]; break;
				case '1000X2250': cost = option[6]; break;
				default: cost = null;
			}
			
			//console.log("Panel color cost: " + cost);
			
			if (cost && parseFloat(cost) > 0) {
				const opt = document.createElement('option');
				opt.value = colorName;
				opt.setAttribute('data-cost', cost);
				opt.textContent = colorName + "-" + cost;
				selectElement.appendChild(opt);
			}
		});*/
	} catch (error) {
        console.error('Error panel colors option:', error);
    }
}

function populateColorOptions2(selectElement, options) {
	try {
		selectElement.innerHTML = '<option value="">--Select glass motiv--</option>';
		options.forEach(option => {
			const colorName = option[0];
			//console.log("Glass motiv name: " + colorName);
			
			const opt = document.createElement('option');
			opt.value = colorName;
			opt.textContent = colorName;
			selectElement.appendChild(opt);
		
		});
	} catch (error) {
        console.error('Error glass motiv option:', error);
    }
}


// Populate select element with panel color options based on available data
/*function populateColorOptions(selectElement, options, panelDimension) {
    selectElement.innerHTML = '<option value="">--Select Color--</option>'; // Reset options

    options.forEach(option => {
        const colorName = option[0];  // Color name (Column 1)
        let cost;

        // Determine cost based on the panel dimension
        switch (panelDimension) {
            case '450X2100':
                cost = option[1];  // Column 2
                break;
            case '900X1050':
                cost = option[2];  // Column 3
                break;
            case '500X2250':
                cost = option[3];  // Column 4
                break;
			case '1250X1250':
                cost = option[4];  // Column 4
                break;
            case '900X2100':
                cost = option[5];  // Column 5
                break;
            case '1000X2250':
                cost = option[6];  // Column 6
                break;
            default:
                cost = null;
        }

        if (cost) {
            const opt = document.createElement('option');
            opt.value = colorName;  // Set color name as value
            opt.setAttribute('data-cost', cost);  // Store the cost in a data attribute
            opt.textContent = colorName + " - " + cost;  // Display color name and cost
            selectElement.appendChild(opt);
        }
    });
}*/

// Handle panel color change to show subcategory colors
colorSelect.addEventListener('change', function() {
    const selectedColor = colorSelect.value;
	//populateSubColorOptions(subColorSelect, selectedColor);
	
	const selectedColorOption = colorSelect.options[colorSelect.selectedIndex];
    if (selectedColorOption) {
        const colorCost = selectedColorOption.getAttribute('data-cost'); // Get the cost from the selected option
        if (colorCost) {
            panelColorOutCost.textContent = colorCost; // Display the cost in the appropriate div
			populateSubColorOptions(subColorSelect, selectedColor);
        } else {
            panelColorOutCost.textContent = '--No cost available--';
        }
    } else {
        panelColorOutCost.textContent = '--Select a Color--';
    }
    
});

colorInSelect.addEventListener('change', function() {
    const selectedColor = colorInSelect.value;
	//populateSubColorInOptions(subColorInSelect, selectedColor);

	const selectedColorInOption = colorInSelect.options[colorInSelect.selectedIndex];
    if (selectedColorInOption) {
        const colorInCost = selectedColorInOption.getAttribute('data-cost'); // Get the cost from the selected option
        if (colorInCost) {
            panelColorInCost.textContent = colorInCost; // Display the cost in the appropriate div
			populateSubColorInOptions(subColorInSelect, selectedColor);
        } else {
            panelColorInCost.textContent = '--No cost available--';
        }
    } else {
        panelColorInCost.textContent = '--Select an Interior Color--';
    }
    
});




// Populate select element with subcategory color options based on selected panel color
function populateSubColorOptions(selectElement, selectedColorCategory) {
    selectElement.innerHTML = '<option value="">--Select Subcategory Color--</option>'; // Reset options

    let subColorColumnIndex;

    // Determine which column to use for sub colors based on panel color category
    switch (selectedColorCategory) {
        case 'FOIL':
            subColorColumnIndex = 0;  // Column 1 for FOIL
			subColorSelectDiv.style.display = 'block';
			//subColorInSelectDiv.style.display = 'block';
			subNoColorDiv.style.display = 'none';
			//subNoColorInDiv.style.display = 'none';
            break;
        case 'FOIL ΕΙΔΙΚΑ 1':
            subColorColumnIndex = 2;  // Column 3 for FOIL ΕΙΔΙΚΑ 1
			subColorSelectDiv.style.display = 'block';
			//subColorInSelectDiv.style.display = 'block';
			subNoColorDiv.style.display = 'none';
			//subNoColorInDiv.style.display = 'none';
            break;
        case 'FOIL ΕΙΔΙΚΑ 2':
            subColorColumnIndex = 4;  // Column 5 for FOIL ΕΙΔΙΚΑ 2
			subColorSelectDiv.style.display = 'block';
			//subColorInSelectDiv.style.display = 'block';
			subNoColorDiv.style.display = 'none';
			//subNoColorInDiv.style.display = 'none';
            break;
		case 'FOIL ΕΙΔΙΚΑ 3':
            subColorColumnIndex = 6;  // Column 5 for FOIL ΕΙΔΙΚΑ 2
			subColorSelectDiv.style.display = 'block';
			//subColorInSelectDiv.style.display = 'block';
			subNoColorDiv.style.display = 'none';
			//subNoColorInDiv.style.display = 'none';
            break;
        default:
            subColorColumnIndex = null;
			subColorSelectDiv.style.display = 'none';
			//subColorInSelectDiv.style.display = 'none';
			subNoColorDiv.style.display = 'block';
			//subNoColorInDiv.style.display = 'block';
    }

    if (subColorColumnIndex !== null) {
        // Extract the sub colors from the correct column
        const subColors = subColorOptions.map(row => row[subColorColumnIndex]).filter(Boolean);

        // Populate the select element with sub colors
        subColors.forEach(subColor => {
            const opt = document.createElement('option');
            opt.value = subColor;  // Set sub color name as value
            opt.textContent = subColor;  // Display the sub color name
            selectElement.appendChild(opt);
        });

        // Show the select element
        selectElement.style.display = 'block';
    } else {
        // Hide the select element if no valid sub color category
        selectElement.style.display = 'none';
    }
}


// Populate select element with subcategory color options based on selected panel color
function populateSubColorInOptions(selectElement, selectedColorCategory) {
    selectElement.innerHTML = '<option value="">--Select Subcategory Color--</option>'; // Reset options

    let subColorColumnIndex;

    // Determine which column to use for sub colors based on panel color category
    switch (selectedColorCategory) {
        case 'FOIL':
            subColorColumnIndex = 0;  // Column 1 for FOIL
			//subColorSelectDiv.style.display = 'block';
			subColorInSelectDiv.style.display = 'block';
			//subNoColorDiv.style.display = 'none';
			subNoColorInDiv.style.display = 'none';
            break;
        case 'FOIL ΕΙΔΙΚΑ 1':
            subColorColumnIndex = 2;  // Column 3 for FOIL ΕΙΔΙΚΑ 1
			//subColorSelectDiv.style.display = 'block';
			subColorInSelectDiv.style.display = 'block';
			//subNoColorDiv.style.display = 'none';
			subNoColorInDiv.style.display = 'none';
            break;
        case 'FOIL ΕΙΔΙΚΑ 2':
            subColorColumnIndex = 4;  // Column 5 for FOIL ΕΙΔΙΚΑ 2
			//subColorSelectDiv.style.display = 'block';
			subColorInSelectDiv.style.display = 'block';
			//subNoColorDiv.style.display = 'none';
			subNoColorInDiv.style.display = 'none';
            break;
		case 'FOIL ΕΙΔΙΚΑ 3':
            subColorColumnIndex = 6;  // Column 5 for FOIL ΕΙΔΙΚΑ 2
			//subColorSelectDiv.style.display = 'block';
			subColorInSelectDiv.style.display = 'block';
			//subNoColorDiv.style.display = 'none';
			subNoColorInDiv.style.display = 'none';
            break;
        default:
            subColorColumnIndex = null;
			//subColorSelectDiv.style.display = 'none';
			subColorInSelectDiv.style.display = 'none';
			//subNoColorDiv.style.display = 'block';
			subNoColorInDiv.style.display = 'block';
    }

    if (subColorColumnIndex !== null) {
        // Extract the sub colors from the correct column
        const subColors = subColorOptions.map(row => row[subColorColumnIndex]).filter(Boolean);

        // Populate the select element with sub colors
        subColors.forEach(subColor => {
            const opt = document.createElement('option');
            opt.value = subColor;  // Set sub color name as value
            opt.textContent = subColor;  // Display the sub color name
            selectElement.appendChild(opt);
        });

        // Show the select element
        selectElement.style.display = 'block';
    } else {
        // Hide the select element if no valid sub color category
        selectElement.style.display = 'none';
    }
}



//WIDTH
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function populateWidthOptions(selectElement, options) {
    selectElement.innerHTML = '<option value="">--Select Width--</option>'; // Reset options
    //console.log("Populating Width Options with Data:", options); // Log data being used

    options.forEach(option => {
        const widthName = option[0];  // Assuming Column 1: Width name
        const opt = document.createElement('option');
        opt.value = widthName;        // Set width name as value
        opt.textContent = widthName;  // Display width name
        selectElement.appendChild(opt);
    });
}

function populateWidthOptions2(selectElement, options, currentSelectedDimension) {
    selectElement.innerHTML = '<option value="">--Select Width--</option>';
	//console.log("Populating Width Options with Data:", options); // Log data being used
	//console.log(selectElement); // Log data being used
	//console.log(options); // Log data being used
	//console.log(selectedDimension); // Log data being used
	//const currentSelectedDimension = panelDimensionsSelect.value;
	
    options.forEach(option => {
        const widthName = option[0];
        const cost = getWidthCost(widthName, currentSelectedDimension); // Get cost based on dimension

        //if (cost && parseFloat(cost) > 0) {
        if (cost) {
            const opt = document.createElement('option');
            opt.value = widthName;
            //opt.textContent = widthName + " - " + cost;
            opt.textContent = widthName;
            opt.setAttribute('data-cost', cost); // Store cost
            selectElement.appendChild(opt);
        }
    });
	
}

// Listen for changes in the panelWidth dropdown
panelWidthSelect.addEventListener('change', function () {
    const selectedWidth = panelWidthSelect.value;
    //const selectedDimension = panelDimensionsSelect.value;
   // const selectedDimension = currentPanelDimension;
    
    if (selectedWidth && currentPanelDimension) {
        const widthCost = getWidthCost(selectedWidth, currentPanelDimension);
        document.getElementById('panelWidthCost').textContent = widthCost;
		//console.log(selectedWidth);
		//console.log(widthCost);
    }
});

// Get the cost based on the selected panel width and dimension
function getWidthCost(selectedWidth, panelDimension) {
    const row = panelWidthOptions.find(row => row[0] === selectedWidth);
    if (!row) return null;

    // Determine the cost based on the panel dimension
    let cost;
    switch (panelDimension) {
        case '450X2100':
            cost = row[1];  // Column 2
            break;
        case '500X2250':
            cost = row[2];  // Column 3
            break;
        case '900X1050':
            cost = row[3];  // Column 4
            break;
        case '900X2100':
            cost = row[4];  // Column 5
            break;
        case '1000X2250':
            cost = row[5];  // Column 6
            break;
        default:
            cost = null;
    }
    
    return cost;
}

panelCutCostSelect.addEventListener('change', function () {
    
    if (panelCutCostSelect.checked) {
        panelCutDiv.style.display = 'block';
        panelCutCostText.style.display = 'block';
		document.getElementById('panelCutCost').textContent = '11,00 €';
    }
	else { 
		panelCutCostText.style.display = 'none';
		panelCutDiv.style.display = 'none';
		document.getElementById('panelCutCost').textContent = '0';
	}
});

panelInoxCostSelect.addEventListener('change', function () {
    
    if (panelInoxCostSelect.checked) {
        panelInoxCostText.style.display = 'block';
		document.getElementById('panelInoxCost').textContent = '55,00 €';
    }
	else {
		panelInoxCostText.style.display = 'none';
		document.getElementById('panelInoxCost').textContent = '0';
	}
});


panelColorOutInSwitch.forEach(radio => {
	radio.addEventListener('change', () => {
		//colorFields.style.display = 'block'; // Show the container when any option is selected

		if (radio.value === '1') {
			panelColorInSelectDiv.style.display = 'none'; // Hide second color field
		} else if (radio.value === '2') {
			panelColorInSelectDiv.style.display = 'block'; // Show second color field
		}
	});
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Clear the details (Description, Dimension, Cost, Glasses, Glass Type)
function clearDetails() {
    descriptionText.textContent = '--Select a Panel Line and Model--';
    dimensionText.textContent = '--Select a Panel Line and Model--';
    dimensionText2.textContent = '--Select a Panel Line and Model--';

    costText.textContent = '--Select a Panel Line and Model--';
    glassesText.textContent = '--Select a Panel Line and Model--';
    glassTypeText.textContent = '--Select a Panel Line and Model--';
	glassCostDiv.textContent = '--Select a Glass Option--';

    // Hide the glass select boxes and clear options
    glassSimpleSelectDiv.style.display = 'none';
    glassTriplexSelectDiv.style.display = 'none';
    //glassSimpleLabel.style.display = 'none';
    //glassTriplexLabel.style.display = 'none';
	
	//document.getElementById('panelExtraCost').textContent = '';
	document.getElementById('panelColorOutCost').textContent = '';
	document.getElementById('panelColorInCost').textContent = '';
	document.getElementById('panelWidthCost').textContent = '';
	//document.getElementById('panelCutCost').textContent = '';
	//document.getElementById('panelInoxCost').textContent = '';
		
	panelCutDiv.style.display = 'none';
	subNoColorDiv.style.display = 'none';
	subNoColorInDiv.style.display = 'none';
	panelExtraCost.style.display = 'none';
}

// Fetch data on page load
//window.onload = fetchData;

function getCostValue(elementId) {
    const element = document.getElementById(elementId);
    if (element && element.textContent) {
        // Remove non-numeric characters (except ',' and '.') and handle comma as a decimal separator
        const sanitizedValue = element.textContent.replace(/[^0-9,.-]/g, '').replace(',', '.');
        const value = parseFloat(sanitizedValue);
        return isNaN(value) ? 0 : value;
    }
    return 0;
}

// Utility function to format numbers as currency in Euros
function formatCurrency(value) {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(value);
}

// Function to calculate and update the total cost
function calculateFinalCost() {
    // List of cost element IDs
    const costIds = [
        'panelExtraCost',
        'panelColorOutCost',
        'panelColorInCost',
        'panelWidthCost',
        'panelCutCost',
        'panelInoxCost',
        'panel_model_cost',
        'glass_cost',
        'triplex_cost'
    ];


    // Sum all costs
    const totalCost = costIds.reduce((sum, id) => sum + getCostValue(id), 0);
	//console.log(totalCost);
    // Display the total cost in a designated element
    const totalCostElement = document.getElementById('totalCost');
    if (totalCostElement) {
        //totalCostElement.textContent = "Total Cost: " + formatCurrency(totalCost);
        totalCostElement.textContent = formatCurrency(totalCost);
    } else {
        console.error('Total cost element not found!');
    }
}

function addCostObservers() {
    const costIds = [
        'panelExtraCost',
        'panelColorOutCost',
        'panelColorInCost',
        'panelWidthCost',
        'panelCutCost',
        'panelInoxCost',
        'panel_model_cost',
        'glass_cost',
        'triplex_cost'
    ];

    // MutationObserver configuration
    const config = { childList: true, characterData: true, subtree: true };

    costIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            const observer = new MutationObserver(calculateFinalCost);
            observer.observe(element, config);
        }
    });
}

// Initialize the total cost calculation setup
function initializeCostCalculation() {
    calculateFinalCost();
    addCostObservers();
}

// Run the cost calculation setup on page load
window.onload = () => {
    fetchData();
    initializeCostCalculation();
};
