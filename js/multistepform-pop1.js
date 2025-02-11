document.addEventListener("touchstart", function() {}, false);
(function($) {
    "use strict";
    $('span#mgsYear').html(new Date().getFullYear());
    var randNumber_1 = parseInt(Math.ceil(Math.random() * 15), 10);
    var randNumber_2 = parseInt(Math.ceil(Math.random() * 15), 10);
    humanCheckCaptcha(randNumber_1, randNumber_2);

    function humanCheckCaptcha(randNumber_1, randNumber_2) {
        $("#humanCheckCaptchaBox").html("Solve The Math ");
        $("#firstDigit").html('<input name="mathfirstnum" id="mathfirstnum" class="form-control" type="text" value="' + randNumber_1 + '" readonly>');
        $("#secondDigit").html('<input name="mathsecondnum" id="mathsecondnum" class="form-control" type="text" value="' + randNumber_2 + '" readonly>');
    }
    $('#estimated-launch-date input').datepicker({
        format: "dd MM, yyyy",
        startDate: "0d",
        todayBtn: "linked",
        todayHighlight: true,
        autoclose: true
    });
    $("#QuoteForm").validator().on("submit", function(event) {
        if (event.isDefaultPrevented()) {
            formError();
            submitMSG(false, "Please fill in the form properly!");
            sweetAlert("Oops...", "Please fill in the form properly!!!", "error");
        } else {
            var mathPart_1 = parseInt($("#mathfirstnum").val(), 10);
            var mathPart_2 = parseInt($("#mathsecondnum").val(), 10);
            var correctMathSolution = parseInt((mathPart_1 + mathPart_2), 10);
            var inputHumanAns = $("#humanCheckCaptchaInput").val();
            if (inputHumanAns == correctMathSolution) {
                event.preventDefault();
                submitForm();
            } else {
                submitMSG(false, "Please solve Human Captcha!!!");
                sweetAlert("Oops...", "Please solve Human Captcha!!!", "error");
                return false;
            }
        }
    });

    function submitForm() {
        var form_data = new FormData($("#QuoteForm")[0]);
        form_data.append('file', form_data);
        $('#loading-image').show();
        $('#final-step-buttons').hide();
        $.ajax({
            type: "POST",
            url: "quote-process.php",
            data: form_data,
            processData: false,
            contentType: false,
            success: function(text) {
                if ($.trim(text) === "success") {
                    formSuccess();
                } else {
                    formError();
                    submitMSG(false, text);
                }
            },
            complete: function() {
                $('#loading-image').hide();
                $('#final-step-buttons').show();
            }
        });
    }
    $(document).on('change', ':file', function() {
        var input = $(this),
            numFiles = input.get(0).files ? input.get(0).files.length : 1,
            label = input.val().replace(/\\/g, 'https://mgsdemo.mgscoder.com/').replace(/.*\//, '');
        input.trigger('fileselect', [numFiles, label]);
    });
    $(':file').on('fileselect', function(event, numFiles, label) {
        var input = $(this).parents('.form-group').find(':text'),
            log = numFiles > 1 ? numFiles + ' files selected' : label;
        if (input.length) {
            input.val(log);
        } else {
            if (log) alert(log);
        }
    });

    function formSuccess() {
        $("#QuoteForm")[0].reset();
        submitMSG(true, "Your Offer Request Submitted Successfully!");
        swal("Good job!", "Your Offer Request Submitted Successfully!!!", "success");
    }

    function formError() {
        $(".help-block.with-errors").removeClass('hidden');
    }

    function submitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h3 text-center text-success";
            $("#final-step-buttons").html('<div class="h3 text-center text-success"> Thank you for your Offer Request. We will get back to you soon!</div>');
        } else {
            var msgClasses = "h3 text-center text-danger";
        }
        $("#mgsContactSubmit").removeClass().addClass(msgClasses).text(msg);
    }
})(jQuery);

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function nextStep2() {

    var line = $("#panel_line").val();
    var model = $("#panel_model").val();
	
    if (line)
        $(".validreqsevice .help-block.with-errors").html('');
    else
        $(".validreqsevice .help-block.with-errors").html('<ul class="list-unstyled"><li>Please Select Line</li></ul>');
    if (model != "")
        $(".validreqfeatures .help-block.with-errors").html('');
    else
        $(".validreqfeatures .help-block.with-errors").html('<ul class="list-unstyled"><li>Please Select Model</li></ul>');
    if (line && model != "") {
        $("#section-1 .help-block.with-errors").html('');
        $("#section-1").removeClass("open");
        $("#section-1").addClass("slide-left");
        $("#section-2").removeClass("slide-right");
        $("#section-2").addClass("open");
    } else {
        $("#section-1 .help-block.with-errors.mandatory-error").html('<ul class="list-unstyled"><li>Please Fill the Form Properly</li></ul>');
        $('html,body').animate({
            scrollTop: $("#section-1 .help-block.with-errors.mandatory-error").offset().top - 80
        }, 'slow');
        sweetAlert("Oops...", "Please fill in the form properly!!!", "error");
    }
}

function previousStep1() {
    $("#section-1").removeClass("slide-left");
    $("#section-1").addClass("open");
    $("#section-2").removeClass("open");
    $("#section-2").addClass("slide-right");
}

function nextStep3() {
    var panel_dimensions = $("#panel_dimensions").val();
    var panel_color = $("#panel_color").val();
    var panelWidth = $("#panelWidth").val();
    //var blind_width = $("#blind_width").val();
	
    //var priority = $('input[name=priority]:checked').val();

    if (panel_dimensions)
        $(".validdimensions .help-block.with-errors").html('');
    else
        $(".validdimensions .help-block.with-errors").html('<ul class="list-unstyled"><li>Please Select Dimensions</li></ul>');
	
    if (panel_color)
        $(".validcolor .help-block.with-errors").html('');
    else
        $(".validcolor .help-block.with-errors").html('<ul class="list-unstyled"><li>Please Select Panel Color</li></ul>');
	
	if (panelWidth)
        $(".validpanelwidth .help-block.with-errors").html('');
    else
        $(".validpanelwidth .help-block.with-errors").html('<ul class="list-unstyled"><li>Please Select Panel Width</li></ul>');
	

    if (panel_dimensions && panel_color && panelWidth) {
        $("#section-2 .help-block.with-errors.mandatory-error").html('');
        $("#section-2").removeClass("open");
        $("#section-2").addClass("slide-left");
        $("#section-3").removeClass("slide-right");
        $("#section-3").addClass("open");
    } else {
        $("#section-2 .help-block.with-errors.mandatory-error").html('<ul class="list-unstyled"><li>Please Fill the Form Properly</li></ul>');
        $('html,body').animate({
            scrollTop: $("#section-2 .help-block.with-errors.mandatory-error").offset().top - 80
        }, 'slow');
        sweetAlert("Oops...", "Please fill in the form properly!!!", "error");
    }
}

function previousStep2() {
    $("#section-2").removeClass("slide-left");
    $("#section-2").addClass("open");
    $("#section-3").removeClass("open");
    $("#section-3").addClass("slide-right");
}

function nextStep4() {
    var fname = $("#fname").val();
    var lname = $("#lname").val();
    var address = $("#address").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var validemail = isEmail(email);
	
    if (fname)
        $(".validfname .help-block.with-errors").html('');
    else
        $(".validfname .help-block.with-errors").html('<ul class="list-unstyled"><li>Please enter First Name</li></ul>');
    if (lname)
        $(".validlname .help-block.with-errors").html('');
    else
        $(".validlname .help-block.with-errors").html('<ul class="list-unstyled"><li>Please enter Last Name</li></ul>');
    if (address)
        $(".validaddress .help-block.with-errors").html('');
    else
        $(".validaddress .help-block.with-errors").html('<ul class="list-unstyled"><li>Please enter Address</li></ul>');
    if (validemail)
        $(".validemail .help-block.with-errors").html('');
    else
        $(".validemail .help-block.with-errors").html('<ul class="list-unstyled"><li>Please enter valid email</li></ul>');
    var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
    if (filter.test(phone)) {
        $(".validphone .help-block.with-errors").html('');
        var validphone = 1;
    } else {
        $(".validphone .help-block.with-errors").html('<ul class="list-unstyled"><li>Please enter valid Phone</li></ul>');
        var validphone = 0;
    }
    if (fname.length > 0 && fname && lname.length > 0 && lname && address.length > 0 && address && validemail && phone.length > 4 && validphone > 0) {
        $("#section-3 .help-block.with-errors.mandatory-error").html('');
        $("#section-3").removeClass("open");
        $("#section-3").addClass("slide-left");
        $("#section-4").removeClass("slide-right");
        $("#section-4").addClass("open");
    } else {
        $("#section-3 .help-block.with-errors.mandatory-error").html('<ul class="list-unstyled"><li>Please Fill the Form Properly</li></ul>');
        $('html,body').animate({
            scrollTop: $("#section-3 .help-block.with-errors.mandatory-error").offset().top - 80
        }, 'slow');
        sweetAlert("Oops...", "Please fill in the form properly!!!", "error");
    }
}

function previousStep3() {
    $("#section-3").removeClass("slide-left");
    $("#section-3").addClass("open");
    $("#section-4").removeClass("open");
    $("#section-4").addClass("slide-right");
}

function nextStep5() {

    var line = $("#panel_line").val();
    var model = $("#panel_model").val();
	
    var dimensions = $("#panel_dimensions").val();
	
    var colorOut = $("#panel_color").val();
    var subColorOut = $("#subColor").val();
    var subColorCustomOut = $("#subNoColor").val();
	
	console.log("Custom out"+subColorCustomOut);
	
	var colorIn = $("#panel_color_in").val();
    var subColorIn = $("#subColorIn").val();
    var subColorCustomIn = $("#subNoColorIn").val();
	
	console.log("Custom in"+subColorCustomIn);
	
	var glassType = $("#model_glass_type").text();
	var glass = $("#glass_simple").val();
	var triplex = $("#glass_triplex").val();
	var motiv = $("#glass_motiv").val();
	
	console.log("Glass"+glass);
	console.log("Triplex"+triplex);
	console.log("Motiv"+motiv);
	
    var panel_width = $("#panelWidth").val();
    //var blind_width = $("#blind_width").val();
    var panel_cut = $('input[name=panel_cut]:checked').val();
    var panel_cut_dim = $("#panelCutDim").val();
	
	var inox_316 = $('input[name=inox_316]:checked').val();

    var fname = $("#fname").val();
    var lname = $("#lname").val();
    var address = $("#address").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
	
    var quantity = $("#quantity").val();
    var panelCost = $("#panel_model_cost").text();
    var panelExtraCost = $("#panelExtraCost").text();
    var panelColorOutCost = $("#panelColorOutCost").text();
    var panelColorInCost = $("#panelColorInCost").text();
    var panelWidthCost = $("#panelWidthCost").text();
    var panelCutCost = $("#panelCutCost").text();
    var panelInoxCost = $("#panelInoxCost").text();
    var panelGlassCost = $("#glass_cost").text();
    var panelTriplexCost = $("#triplex_cost").text();
   
    var totalCost = $("#totalCost").text();
    var vat = $("#vat").val();
	

    //var requirementdetails = $("#requirementdetails").val().replace(/\n/g, "<br>");
    var additionalinfo = $("#additionalinfo").val().replace(/\n/g, "<br>");
    //var preferedcontact = $('input[name=preferedcontact]:checked').val();
	


    $("#lineData").html('<strong>Selected Line:</strong> ' + line);
    $("#modelData").html('<strong>Selected Model:</strong> ' + model);
	
    $("#dimensionsData").html('<strong>Panel Dimensions:</strong> ' + dimensions);
	
    $("#colorOutData").html('<strong>Panel color out:</strong> ' + colorOut);
	$("#subColorOutData").html('<strong>Panel subcolor out:</strong> ' + subColorOut);
	$("#subColorCustomOutData").html('<strong>Panel subcolor out custom:</strong> ' + subColorCustomOut);
	
	if (subColorOut == "") $("#subColorOutData").hide();
	if (subColorCustomOut == "") $("#subColorCustomOutData").hide();
	
    $("#colorInData").html('<strong>Panel color in:</strong> ' + colorIn);
    $("#subColorInData").html('<strong>Panel subcolor in:</strong> ' + subColorIn);
    $("#subColorCustomInData").html('<strong>Panel subcolor in custom:</strong> ' + subColorCustomIn);
	
	if (colorIn == "") $("#colorInData").hide();
	if (subColorIn == "") $("#subColorInData").hide();
	if (subColorCustomIn == "") $("#subColorCustomInData").hide();
	
    $("#panelwidthData").html('<strong>Panel Width:</strong> ' + panel_width);

	$("#panelGlassTypeData").html('<strong>Panel Glass Type:</strong> ' + glassType);
    $("#panelGlassData").html('<strong>Panel Glass:</strong> ' + glass);
    
    $("#panelTriplexData").html('<strong>Triplex:</strong> ' + triplex);
    $("#panelMotivData").html('<strong>Motiv:</strong> ' + motiv);
	
	if (glass == "") $("#panelGlassData").hide();
	if (glassType == "0") $("#panelGlassTypeData").hide();
	if (triplex == "") $("#panelTriplexData").hide();
	if (motiv == "") $("#panelMotivData").hide();
	
    //$("#blindwidthData").html('<strong>Blind Width:</strong> ' + blind_width);
    $("#panelCutData").html('<strong>Panel Cut:</strong> ' + panel_cut);
	$("#panelCutDimData").html('<strong>Panel Cut Dim:</strong> ' + panel_cut_dim);
	
	//console.log("Panel Cut"+panel_cut);
	
	if (panel_cut != "YES") $("#panelCutData").hide();
	if (panel_cut_dim == "") $("#panelCutDimData").hide();
	
    $("#inox316Data").html('<strong>Inox 316:</strong> ' + inox_316);

	if (inox_316 != "YES") $("#inox316Data").hide();

	
	//Customer Info
    $("#firstNameData").html('<strong>First Name:</strong> ' + fname);
    $("#lastNameData").html('<strong>Last Name:</strong> ' + lname);
    $("#addressData").html('<strong>Address:</strong> ' + address);
    $("#emailaddressData").html('<strong>Email:</strong> ' + email);
    $("#phoneData").html('<strong>Phone:</strong> ' + phone);
	
	
	//Offer Details
	$("#quantityData").html('<strong>Quantity:</strong> ' + quantity);
	$("#panelCostData").html('<strong>Panel cost:</strong> ' + panelCost);
	$("#panelExtraCostData").html('<strong>Panel extra cost:</strong> ' + panelExtraCost);
	$("#panelColorOutCostData").html('<strong>Panel color out cost:</strong> ' + panelColorOutCost);
	$("#panelColorInCostData").html('<strong>Panel color in cost:</strong> ' + panelColorInCost);
	$("#panelWidthCostData").html('<strong>Panel width cost:</strong> ' + panelWidthCost);
	$("#panelCutCostData").html('<strong>Panel cut cost:</strong> ' + panelCutCost);
	$("#panelInoxCostData").html('<strong>Panel inox cost:</strong> ' + panelInoxCost);
	$("#panelGlassCostData").html('<strong>Panel glass cost:</strong> ' + panelGlassCost);
	$("#panelTriplexCostData").html('<strong>Panel triplex cost:</strong> ' + panelTriplexCost);
	
	if (panelColorInCost == "") $("#panelColorInCostData").hide();
	if (panelTriplexCost == "") $("#panelTriplexCostData").hide();
	if (panelGlassCost == "--Select a Glass Option--") $("#panelGlassCostData").hide();
	
	if (panelExtraCost == "0") $("#panelExtraCostData").hide();
	if (panelCutCost == "0") $("#panelCutCostData").hide();
	if (panelInoxCost == "0") $("#panelInoxCostData").hide();
	
	
	//Total Details
	//$("#totalCostData").html('<strong>Total cost:</strong> ' + formatCurrency((getCostValue(totalCost)) * quantity) );
	var total_cost = totalCost.replace(/[^0-9,.-]/g, '').replace(',', '.');
	var total_quantity = total_cost * quantity;
	var total_vat = (total_quantity * vat) - total_quantity;
	
	console.log("Total: " + total_quantity);
	console.log("Vat value: " + vat);
	console.log("Final: " + (total_quantity * vat));
	console.log("Final: " + (total_quantity+total_vat));
	
	$("#totalCostData").html('<strong>Total cost:</strong> ' + formatCurrency(total_quantity) );
	$("#vat_cost").html('<strong>VAT(%) cost:</strong> ' + formatCurrency(total_vat) );
	$("#final_cost").html('<strong>Final cost:</strong> ' + formatCurrency(total_quantity + total_vat) );
	
	
	
	
	//Extra Details
    //$("#requirementdetailsData").html('<strong>Offer Details:</strong><br> ' + requirementdetails);
    $("#additionalinfoData").html('<strong>Additional Info:</strong><br> ' + additionalinfo);
    //$("#preferedcontactData").html('<strong>Send offer by email:</strong> ' + preferedcontact);
	
	
	
	
    /*if (preferedcontact)
        $(".validpreferedcontact .help-block.with-errors").html('');
    else
        $(".validpreferedcontact .help-block.with-errors").html('<ul class="list-unstyled"><li>Please Select Offer Send Method</li></ul>');
    if (requirementdetails.length > 0 && requirementdetails)
        $(".validreqdetails .help-block.with-errors").html('');
    else
        $(".validreqdetails .help-block.with-errors").html('<ul class="list-unstyled"><li>Please Provide Offer Details</li></ul>');*/
    if (quantity) {
        $("#section-4 .help-block.with-errors.mandatory-error").html('');
        $("#section-4").removeClass("open");
        $("#section-4").addClass("slide-left");
        $("#section-5").removeClass("slide-right");
        $("#section-5").addClass("open");
    } else {
        $("#section-4 .help-block.with-errors.mandatory-error").html('<ul class="list-unstyled"><li>Please Fill the Form Properly</li></ul>');
        $('html,body').animate({
            scrollTop: $("#section-4 .help-block.with-errors.mandatory-error").offset().top - 80
        }, 'slow');
        sweetAlert("Oops...", "Please fill in the form properly!!!", "error");
    }
}

function previousStep4() {
    $("#section-4").removeClass("slide-left");
    $("#section-4").addClass("open");
    $("#section-5").removeClass("open");
    $("#section-5").addClass("slide-right");
}

function formatCurrency(value) {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(value);
}