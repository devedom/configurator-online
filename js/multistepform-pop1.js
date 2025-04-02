
function printOffer() {
    let printWindow = window.open('', '_blank');
    let today = new Date().toLocaleDateString();
    let content = `
        <html>
            <head>
                <title>Verpan ALU Panel Offer</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; font-size: 11px;}
                    .logo { text-align: center; margin-bottom: 30px; }
                    .logo img { width: 300px; height: auto; }
                    .offer-date { text-align: center; border: 2px solid #333; padding: 15px; margin: 20px 0; font-weight: bold; }
                    .main-content { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 20px; }
                    .column { width: calc(50% - 10px); min-width: 300px; }
                    .section { border: 1px solid #ccc; padding: 15px; margin-bottom: 20px; border-radius: 5px; }
                    .section-title { font-size: 18px; font-weight: bold; margin-bottom: 15px; padding-bottom: 5px; border-bottom: 2px solid #333; }
                    .info-block { margin: 10px 0; }
                    .info-block p { margin: 5px 0; }
                    .signature-block { margin-top: 30px; border: 1px solid #ccc; padding: 15px; text-align: center; }
                    @media print {
                        .logo img { display: block !important; }
                        .section { break-inside: avoid; }
                        body { -webkit-print-color-adjust: exact; }
                    }
                </style>
            </head>
            <body>
                <div class="logo">
                    <img src="images/logo_beta.png" alt="Verpan Logo" style="width: 300px; height: auto;"/>
                </div>
                <div class="offer-date">
                    Προσφορά Πάνελ Αλουμινίου Verpan - ${today}
                </div>
                <div class="main-content">
                    <div class="column">
                        <div class="section">
                            <div class="section-title">Στοιχεία Πελάτη</div>
                            <div class="info-block">
                                ${document.querySelector('.section-info-box').innerHTML}
                            </div>
                        </div>
                        <div class="section">
                            <div class="section-title">Διαμόρφωση Πάνελ</div>
                            <div class="info-block">
                                ${document.querySelectorAll('.section-info-box')[1].innerHTML}
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="section">
                            <div class="section-title">Λεπτομέρειες Προσφοράς</div>
                            <div class="info-block">
                                ${document.querySelectorAll('.section-info-box')[2].innerHTML}
                            </div>
                        </div>
                        <div class="section">
                            <div class="section-title">Υπογραφή</div>
                            <div class="signature-block">
                                <div>Εξουσιοδοτημένη Υπογραφή</div>
                                <div style="margin-top: 50px;">_____________________</div>
                                <div style="margin-top: 10px;">Ημερομηνία: ${today}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    `;
    printWindow.document.write(content);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
}

const translations = {
    gr: {
        'Progress': 'Πρόοδος',
        'Complete': 'Ολοκληρώθηκε',
        'Line/Model': 'Γραμμή/Μοντέλο',
        'Configuration': 'Διαμόρφωση', 
        'Dimensions': 'Διαστάσεις',
        'Customer': 'Πελάτης',
        'Details': 'Λεπτομέρειες',
        'Report': 'Αναφορά',
        'Report & Submit': 'Αναφορά & Υποβολή',
        'Review & Submit': 'Επισκόπηση & Υποβολή',
        'Provide Customer Info': 'Εισάγετε Στοιχεία Πελάτη:',
        'Provide Additional Info': 'Εισάγετε Πρόσθετες Πληροφορίες:',
        'Provide Quantity': 'Εισάγετε Ποσότητα:',
        'Choose Vat': 'Επιλέξτε ΦΠΑ:',
        'Provide Discount': 'Εισάγετε Έκπτωση (%):',
        'Choose panel color out': 'Επιλέξτε χρώμα πάνελ (εξωτερικό):',
        'Choose panel sub color out': 'Επιλέξτε δευτερεύον χρώμα πάνελ (εξωτερικό):',
        'Provide panel sub color': 'Εισάγετε δευτερεύον χρώμα πάνελ:',
        'Choose panel color in': 'Επιλέξτε χρώμα πάνελ (εσωτερικό):',
        'Choose panel sub color in': 'Επιλέξτε δευτερεύον χρώμα πάνελ (εσωτερικό):',
        'Provide panel sub color in': 'Εισάγετε δευτερεύον χρώμα πάνελ (εσωτερικό):',
        'Choose panel width': 'Επιλέξτε πλάτος πάνελ:',
        'Provide dimension': 'Εισάγετε διάσταση (mm):',
        'Select Panel Cut': 'Επιλέξτε Κοπή Πάνελ:',
        'Select Inox 316': 'Επιλέξτε Inox 316:',
        'Panel Glass Section': 'ΕΝΟΤΗΤΑ ΓΥΑΛΙΟΥ ΠΑΝΕΛ',
        'Panel Dimensions Section': 'ΕΝΟΤΗΤΑ ΔΙΑΣΤΑΣΕΩΝ ΠΑΝΕΛ',
        'Panel Color Section': 'ΕΝΟΤΗΤΑ ΧΡΩΜΑΤΟΣ ΠΑΝΕΛ',
        'Panel Width Section': 'ΕΝΟΤΗΤΑ ΠΛΑΤΟΥΣ ΠΑΝΕΛ',
        'Step 1 of 5': 'Βήμα 1 από 5',
        'Select ALU Line': 'Επιλέξτε γραμμή ALU',
        'Select Line': 'Επιλέξτε γραμμή',
        'Select Model': 'Επιλέξτε μοντέλο',
        'Panel model description': 'Περιγραφή μοντέλου πάνελ',
        'Panel model dimensions': 'Διαστάσεις μοντέλου πάνελ',
        'Cost of panel model': 'Κόστος μοντέλου πάνελ',
        'Step 2 of 5': 'Βήμα 2 από 5',
        'Step 3 of 5': 'Βήμα 3 από 5',
        'Step 4 of 5': 'Βήμα 4 από 5',
        'Step 5 of 5': 'Βήμα 5 από 5',
        'Line/Model': 'Γραμμή/Μοντέλο',
        'Configuration': 'Διαμόρφωση',
        'Customer': 'Πελάτης',
        'Details': 'Λεπτομέρειες',
        'Confirmation': 'Επιβεβαίωση',
        'Next': 'Επόμενο',
        'Back': 'Πίσω',
        'Submit': 'Υποβολή',
        'Print': 'Εκτύπωση',
        'Download PDF Offer': 'Λήψη Προσφοράς PDF',
        'New Configuration': 'Νέα Διαμόρφωση',
        'Customer Info': 'Στοιχεία Πελάτη',
        'Offer Details': 'Λεπτομέρειες Προσφοράς',
        'Panel Configuration': 'Διαμόρφωση Πάνελ',
        'First Name': 'Όνομα',
        'Last Name': 'Επώνυμο',
        'Address': 'Διεύθυνση',
        'Email': 'Email',
        'Phone': 'Τηλέφωνο',
        'Quantity': 'Ποσότητα',
        'Panel cost': 'Κόστος πάνελ',
        'Panel cost discount': 'Έκπτωση κόστους πάνελ',
        'Panel color out cost': 'Κόστος εξωτερικού χρώματος',
        'Panel color in cost': 'Κόστος εσωτερικού χρώματος',
        'Panel width cost': 'Κόστος πλάτους',
        'Panel glass cost': 'Κόστος γυαλιού',
        'Panel triplex cost': 'Κόστος triplex',
        'Panel cut cost': 'Κόστος κοπής',
        'Panel inox cost': 'Κόστος inox',
        'Base total': 'Σύνολο χωρίς ΦΠΑ',
        'VAT': 'ΦΠΑ',
        'Final total': 'Τελικό σύνολο',
        'Additional Info': 'Πρόσθετες Πληροφορίες',
        'Selected Line': 'Επιλεγμένη Γραμμή',
        'Selected Model': 'Επιλεγμένο Μοντέλο',
        'Panel Dimensions': 'Διαστάσεις Πάνελ',
        'Panel color out': 'Εξωτερικό χρώμα',
        'Panel color in': 'Εσωτερικό χρώμα',
        'Panel Width': 'Πλάτος Πάνελ',
        'Panel Glass Type': 'Τύπος Γυαλιού',
        'Panel Glass': 'Γυαλί',
        'Panel Cut': 'Κοπή Πάνελ',
        'Panel Cut Dim': 'Διαστάσεις Κοπής',
        'Inox 316': 'Inox 316',
        'Please solve Human Captcha correctly!': 'Παρακαλώ λύστε σωστά το Human Captcha!',
        'Please fill in all required fields!': 'Παρακαλώ συμπληρώστε όλα τα υποχρεωτικά πεδία!',
        'Solve The Math': 'Λύστε την Πράξη',
        'Thank you!': 'Ευχαριστούμε!',
        'Your offer has been submitted successfully!': 'Η προσφορά σας υποβλήθηκε με επιτυχία!',
        'We will contact you as soon as possible.': 'Θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό.',
        'Verpan Aluminium Panel Offer': 'Προσφορά Πάνελ Αλουμινίου Verpan',
        'Authorized Signature': 'Εξουσιοδοτημένη Υπογραφή',
        'Date': 'Ημερομηνία',
        'Panel extra cost': 'Επιπλέον κόστος',
        'Total cost': 'Συνολικό κόστος',
        'Final cost': 'Τελικό κόστος',
        'Signature': 'Υπογραφή'
    },
    en: {
        'Progress': 'Progress',
        'Complete': 'Complete',
        'Line/Model': 'Line/Model',
        'Configuration': 'Configuration',
        'Dimensions': 'Dimensions', 
        'Customer': 'Customer',
        'Details': 'Details',
        'Report': 'Report',
        'Report & Submit': 'Report & Submit',
        'Review & Submit': 'Review & Submit',
        'Provide Customer Info': 'Provide Customer Info:',
        'Provide Additional Info': 'Provide Additional Info:',
        'Provide Quantity': 'Provide Quantity:',
        'Choose Vat': 'Choose Vat:',
        'Provide Discount': 'Provide Discount (%):',
        'Choose panel color out': 'Choose panel color (out):',
        'Choose panel sub color out': 'Choose panel sub color (out):',
        'Provide panel sub color': 'Provide panel sub color:',
        'Choose panel color in': 'Choose panel color (in):',
        'Choose panel sub color in': 'Choose panel sub color (in):',
        'Provide panel sub color in': 'Provide panel sub color in:',
        'Choose panel width': 'Choose panel width:',
        'Provide dimension': 'Provide dimension (mm):',
        'Select Panel Cut': 'Select Panel Cut:',
        'Select Inox 316': 'Select Inox 316:',
        'Panel Glass Section': 'PANEL GLASS SECTION',
        'Panel Dimensions Section': 'PANEL DIMENSIONS SECTION',
        'Panel Color Section': 'PANEL COLOR SECTION', 
        'Panel Width Section': 'PANEL WIDTH SECTION',
        'Step 1 of 5': 'Step 1 of 5',
        'Select ALU Line': 'Select ALU Line',
        'Select Line': 'Select Line',
        'Select Model': 'Select Model',
        'Panel model description': 'Panel model description',
        'Panel model dimensions': 'Panel model dimensions',
        'Cost of panel model': 'Cost of panel model',
        'Step 2 of 5': 'Step 2 of 5',
        'Step 3 of 5': 'Step 3 of 5',
        'Step 4 of 5': 'Step 4 of 5',
        'Step 5 of 5': 'Step 5 of 5',
        'Line/Model': 'Line/Model',
        'Configuration': 'Configuration',
        'Customer': 'Customer',
        'Details': 'Details',
        'Confirmation': 'Confirmation',
        'Next': 'Next',
        'Back': 'Back',
        'Submit': 'Submit',
        'Print': 'Print',
        'Download PDF Offer': 'Download PDF Offer',
        'New Configuration': 'New Configuration',
        'Customer Info': 'Customer Info',
        'Offer Details': 'Offer Details',
        'Panel Configuration': 'Panel Configuration',
        'First Name': 'First Name',
        'Last Name': 'Last Name',
        'Address': 'Address',
        'Email': 'Email',
        'Phone': 'Phone',
        'Quantity': 'Quantity',
        'Panel cost': 'Panel cost',
        'Panel cost discount': 'Panel cost discount',
        'Panel color out cost': 'Panel color out cost',
        'Panel color in cost': 'Panel color in cost',
        'Panel width cost': 'Panel width cost',
        'Panel glass cost': 'Panel glass cost',
        'Panel triplex cost': 'Panel triplex cost',
        'Panel cut cost': 'Panel cut cost',
        'Panel inox cost': 'Panel inox cost',
        'Base total': 'Base total',
        'VAT': 'VAT',
        'Final total': 'Final total',
        'Additional Info': 'Additional Info',
        'Selected Line': 'Selected Line',
        'Selected Model': 'Selected Model',
        'Panel Dimensions': 'Panel Dimensions',
        'Panel color out': 'Panel color out',
        'Panel color in': 'Panel color in',
        'Panel Width': 'Panel Width',
        'Panel Glass Type': 'Panel Glass Type',
        'Panel Glass': 'Panel Glass',
        'Panel Cut': 'Panel Cut',
        'Panel Cut Dim': 'Panel Cut Dim',
        'Inox 316': 'Inox 316',
        'Please solve Human Captcha correctly!': 'Please solve Human Captcha correctly!',
        'Please fill in all required fields!': 'Please fill in all required fields!',
        'Solve The Math': 'Solve The Math',
        'Thank you!': 'Thank you!',
        'Your offer has been submitted successfully!': 'Your offer has been submitted successfully!',
        'We will contact you as soon as possible.': 'We will contact you as soon as possible.',
        'Verpan Aluminium Panel Offer': 'Verpan Aluminium Panel Offer',
        'Authorized Signature': 'Authorized Signature',
        'Date': 'Date'
    }
};

function changeLanguage(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    localStorage.setItem('preferred_language', lang);
}

// Initialize language from local storage or default to English
document.addEventListener('DOMContentLoaded', () => {
    //const preferred_language = localStorage.getItem('preferred_language') || 'en';
    //changeLanguage(preferred_language);
});

document.addEventListener("touchstart", function () {}, false);
(function ($) {
    "use strict";
    $("span#mgsYear").html(new Date().getFullYear());
    var randNumber_1 = parseInt(Math.ceil(Math.random() * 15), 10);
    var randNumber_2 = parseInt(Math.ceil(Math.random() * 15), 10);
    humanCheckCaptcha(randNumber_1, randNumber_2);

    function humanCheckCaptcha(randNumber_1, randNumber_2) {
        $("#humanCheckCaptchaBox").html("Λύστε την Πράξη ");
        $("#firstDigit").html(
            '<input name="mathfirstnum" id="mathfirstnum" class="form-control" type="text" value="' +
                randNumber_1 +
                '" readonly>',
        );
        $("#secondDigit").html(
            '<input name="mathsecondnum" id="mathsecondnum" class="form-control" type="text" value="' +
                randNumber_2 +
                '" readonly>',
        );
    }
    $("#estimated-launch-date input").datepicker({
        format: "dd MM, yyyy",
        startDate: "0d",
        todayBtn: "linked",
        todayHighlight: true,
        autoclose: true,
    });
    $("#QuoteForm")
        .validator()
        .on("submit", function (event) {
            event.preventDefault();

            // Validate required fields
            var isValid = true;
            var requiredFields = [
                "panel_line",
                "panel_model",
                "panel_dimensions",
                "panel_color",
                "panelWidth",
                "fname",
                "lname",
                "address",
                "email",
                "phone",
                "quantity",
            ];

            requiredFields.forEach(function (field) {
                if (!$("#" + field).val()) {
                    isValid = false;
                    $(".valid" + field + " .help-block.with-errors").html(
                        '<ul class="list-unstyled"><li>This field is required</li></ul>',
                    );
                }
            });

            if (!isValid) {
                formError();
                submitMSG(false, "Please fill in all required fields!");
                sweetAlert(
                    "Oops...",
                    "Please fill in all required fields!",
                    "error",
                );
                return;
            }

            // Validate captcha
            var mathPart_1 = parseInt($("#mathfirstnum").val(), 10);
            var mathPart_2 = parseInt($("#mathsecondnum").val(), 10);
            var correctMathSolution = mathPart_1 + mathPart_2;
            var inputHumanAns = parseInt(
                $("#humanCheckCaptchaInput").val(),
                10,
            );

            if (inputHumanAns === correctMathSolution) {
                submitForm();
            } else {
                submitMSG(false, "Λύστε σωστά την πράξη!");
                sweetAlert(
                    "Oops...",
                    "Λύστε σωστά την πράξη!",
                    "error",
                );
            }
        });

    function submitForm() {
        var form = $("#QuoteForm")[0];
        var form_data = new FormData(form);

        // Helper function to safely get text content
        function safeGetText(selector) {
            const el = $(selector);
            const text = el.text();
            if (!text) return "";
            const parts = text.split(":");
            return parts.length > 1 ? parts[1].trim().replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '') : "";
        }

        // Add all required data for PDF generation
        form_data.append("panel_cost", $("#panel_model_cost").text());
        form_data.append("panel_extra_cost", $("#panelExtraCost").text());
        form_data.append("panel_color_out_cost", $("#panelColorOutCost").text());
        form_data.append("panel_color_in_cost", $("#panelColorInCost").text());
        form_data.append("panel_width_cost", $("#panelWidthCost").text());
        form_data.append("panel_glass_cost", $("#glass_cost").text());
        form_data.append("panel_triplex_cost", $("#triplex_cost").text());
        form_data.append("panel_cut_cost", $("#panelCutCost").text());
        form_data.append("panel_inox_cost", $("#panelInoxCost").text());
        form_data.append("base_total", safeGetText("#totalCostData"));
        form_data.append("vat_percentage", (parseFloat($("#vat").val() || 1) - 1) * 100);
        form_data.append("vat_amount", safeGetText("#vat_cost"));
        form_data.append("final_total", safeGetText("#final_cost"));
        form_data.append("dimensions", $("#panel_dimensions").val());
        form_data.append("glassTypeText", $("#model_glass_type").text());
        form_data.append("discount_percentage", parseFloat($("#discount").val() || 0));

        $("#loading-image").show();
        $("#final-step-buttons").hide();

        $.ajax({
            type: "POST",
            url: "quote-process.php",
            data: form_data,
            processData: false,
            contentType: false,
            success: function (response) {
                try {
                    if (typeof response === 'string') {
                        response = JSON.parse(response);
                    }
                    if (response.status === "success") {
                        formSuccess(response);
                    } else {
                        formError();
                        submitMSG(false, response.message || "An error occurred");
                    }
                } catch (e) {
                    console.error('Parse error:', e);
                    formError();
                    submitMSG(false, "Server response error: " + e.message);
                }
            },
            error: function (xhr, status, error) {
                console.error('AJAX error:', status, error);
                formError();
                submitMSG(false, "Server communication error: " + error);
            },
            complete: function () {
                $("#loading-image").hide();
                $("#final-step-buttons").show();
            },
        });
    }
    $(document).on("change", ":file", function () {
        var input = $(this),
            numFiles = input.get(0).files ? input.get(0).files.length : 1,
            label = input
                .val()
                .replace(/\\/g, "https://mgsdemo.mgscoder.com/")
                .replace(/.*\//, "");
        input.trigger("fileselect", [numFiles, label]);
    });
    $(":file").on("fileselect", function (event, numFiles, label) {
        var input = $(this).parents(".form-group").find(":text"),
            log = numFiles > 1 ? numFiles + " files selected" : label;
        if (input.length) {
            input.val(log);
        } else {
            if (log) alert(log);
        }
    });
	
	function startNewConfiguration() {
		window.location.reload();
	}

    function formSuccess(response) {
        $("#QuoteForm")[0].reset();

        // Create PDF download button
        var downloadBtn =
            '<a href="data:application/pdf;base64,' +
            response.pdf +
            '" download="verpan_offer.pdf" class="btn btn-custom">Αποθήκευση προσφοράς(PDF)</a>';

        swal(
            {
                title: "Ευχαριστούμε!",
                text: "Η προσφορά σας υποβλήθηκε με επιτυχία! Θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό.",
                type: "success",
                html: true,
                confirmButtonText: "OK",
                closeOnConfirm: true,
            },
            function () {
                var newConfigBtn = '<button class="btn btn-custom" onclick="startNewConfiguration()" style="margin-left: 10px;">Νέα Διαμόρφωση</button>';
                $("#final-step-buttons").html(downloadBtn + newConfigBtn);
            },
        );

    }

    function formError() {
        $(".help-block.with-errors").removeClass("hidden");
    }

    function submitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h3 text-center text-success";
            $("#final-step-buttons").html(
                '<div class="h3 text-center text-success"> Σας ευχαριστούμε για το αίτημα προσφοράς σας. Θα επικοινωνήσουμε μαζί σας σύντομα!</div>',
            );
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

    if (line) $(".validreqsevice .help-block.with-errors").html("");
    else
        $(".validreqsevice .help-block.with-errors").html(
            '<ul class="list-unstyled"><li>Please Select Line</li></ul>',
        );
    if (model != "") $(".validreqfeatures .help-block.with-errors").html("");
    else
        $(".validreqfeatures .help-block.with-errors").html(
            '<ul class="list-unstyled"><li>Please Select Model</li></ul>',
        );
    if (line && model != "") {
        $("#section-1 .help-block.with-errors").html("");
        $("#section-1").removeClass("open");
        $("#section-1").addClass("slide-left");
        $("#section-2").removeClass("slide-right");
        $("#section-2").addClass("open");
    } else {
        $("#section-1 .help-block.with-errors.mandatory-error").html(
            '<ul class="list-unstyled"><li>Please Fill the Form Properly</li></ul>',
        );
        $("html,body").animate(
            {
                scrollTop:
                    $(
                        "#section-1 .help-block.with-errors.mandatory-error",
                    ).offset().top - 80,
            },
            "slow",
        );
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
        $(".validdimensions .help-block.with-errors").html("");
    else
        $(".validdimensions .help-block.with-errors").html(
            '<ul class="list-unstyled"><li>Please Select Dimensions</li></ul>',
        );

    if (panel_color) $(".validcolor .help-block.with-errors").html("");
    else
        $(".validcolor .help-block.with-errors").html(
            '<ul class="list-unstyled"><li>Please Select Panel Color</li></ul>',
        );

    if (panelWidth) $(".validpanelwidth .help-block.with-errors").html("");
    else
        $(".validpanelwidth .help-block.with-errors").html(
            '<ul class="list-unstyled"><li>Please Select Panel Width</li></ul>',
        );

    if (panel_dimensions && panel_color && panelWidth) {
        $("#section-2 .help-block.with-errors.mandatory-error").html("");
        $("#section-2").removeClass("open");
        $("#section-2").addClass("slide-left");
        $("#section-3").removeClass("slide-right");
        $("#section-3").addClass("open");
    } else {
        $("#section-2 .help-block.with-errors.mandatory-error").html(
            '<ul class="list-unstyled"><li>Συμπληρώστε σωστά τη φόρμα!!!</li></ul>',
        );
        $("html,body").animate(
            {
                scrollTop:
                    $(
                        "#section-2 .help-block.with-errors.mandatory-error",
                    ).offset().top - 80,
            },
            "slow",
        );
        sweetAlert("Oops...", "Συμπληρώστε σωστά τη φόρμα!!!", "error");
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

    if (fname) $(".validfname .help-block.with-errors").html("");
    else
        $(".validfname .help-block.with-errors").html(
            '<ul class="list-unstyled"><li>Please enter First Name</li></ul>',
        );
    if (lname) $(".validlname .help-block.with-errors").html("");
    else
        $(".validlname .help-block.with-errors").html(
            '<ul class="list-unstyled"><li>Please enter Last Name</li></ul>',
        );
    if (address) $(".validaddress .help-block.with-errors").html("");
    else
        $(".validaddress .help-block.with-errors").html(
            '<ul class="list-unstyled"><li>Please enter Address</li></ul>',
        );
    if (validemail) $(".validemail .help-block.with-errors").html("");
    else
        $(".validemail .help-block.with-errors").html(
            '<ul class="list-unstyled"><li>Please enter valid email</li></ul>',
        );
    var filter =
        /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
    if (filter.test(phone)) {
        $(".validphone .help-block.with-errors").html("");
        var validphone = 1;
    } else {
        $(".validphone .help-block.with-errors").html(
            '<ul class="list-unstyled"><li>Please enter valid Phone</li></ul>',
        );
        var validphone = 0;
    }
    if (
        fname.length > 0 &&
        fname &&
        lname.length > 0 &&
        lname &&
        address.length > 0 &&
        address &&
        validemail &&
        phone.length > 4 &&
        validphone > 0
    ) {
        $("#section-3 .help-block.with-errors.mandatory-error").html("");
        $("#section-3").removeClass("open");
        $("#section-3").addClass("slide-left");
        $("#section-4").removeClass("slide-right");
        $("#section-4").addClass("open");
    } else {
        $("#section-3 .help-block.with-errors.mandatory-error").html(
            '<ul class="list-unstyled"><li>Συμπληρώστε σωστά τη φόρμα!!!</li></ul>',
        );
        $("html,body").animate(
            {
                scrollTop:
                    $(
                        "#section-3 .help-block.with-errors.mandatory-error",
                    ).offset().top - 80,
            },
            "slow",
        );
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

    console.log("Custom out" + subColorCustomOut);

    var colorIn = $("#panel_color_in").val();
    var subColorIn = $("#subColorIn").val();
    var subColorCustomIn = $("#subNoColorIn").val();

    console.log("Custom in" + subColorCustomIn);

    var glassType = $("#model_glass_type").text();
    var glass = $("#glass_simple").val();
    var triplex = $("#glass_triplex").val();
    var motiv = $("#glass_motiv").val();

    console.log("Glass" + glass);
    console.log("Triplex" + triplex);
    console.log("Motiv" + motiv);

    var panel_width = $("#panelWidth").val();
    //var blind_width = $("#blind_width").val();
    var panel_cut = $("input[name=panel_cut]:checked").val();
    var panel_cut_dim = $("#panelCutDim").val();

    var inox_316 = $("input[name=inox_316]:checked").val();

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

    $("#lineData").html("<strong>Επιλεγμένη σειρά:</strong> " + line);
    $("#modelData").html("<strong>Επιλεγμένο μοντέλο:</strong> " + model);

    $("#dimensionsData").html(
        "<strong>Διαστάσεις Πάνελ:</strong> " + dimensions,
    );

    $("#colorOutData").html("<strong>Χρώμα Πάνελ (εξωτερικό):</strong> " + colorOut);
    $("#subColorOutData").html(
        "<strong>Δευτερεύον χρώμα (εξωτερικό):</strong> " + subColorOut,
    );
    $("#subColorCustomOutData").html(
        "<strong>Δευτερεύον χρώμα (εξωτερικό):</strong> " + subColorCustomOut,
    );

    if (subColorOut == "") $("#subColorOutData").hide();
    if (subColorCustomOut == "") $("#subColorCustomOutData").hide();

    $("#colorInData").html("<strong>Χρώμα πάνελ (εσωτερικό):</strong> " + colorIn);
    $("#subColorInData").html(
        "<strong>Δευτερεύον χρώμα (εσωτερικό):</strong> " + subColorIn,
    );
    $("#subColorCustomInData").html(
        "<strong>Δευτερεύον χρώμα (εσωτερικό):</strong> " + subColorCustomIn,
    );

    if (colorIn == "") $("#colorInData").hide();
    if (subColorIn == "") $("#subColorInData").hide();
    if (subColorCustomIn == "") $("#subColorCustomInData").hide();

    $("#panelwidthData").html("<strong>Πάχος πάνελ:</strong> " + panel_width);

    $("#panelGlassTypeData").html(
        "<strong>Τύπος γυαλιού:</strong> " + glassType,
    );
    $("#panelGlassData").html("<strong>Γυαλί:</strong> " + glass);

    $("#panelTriplexData").html("<strong>Triplex:</strong> " + triplex);
    $("#panelMotivData").html("<strong>Μοτίβο γυαλιού:</strong> " + motiv);

    if (glass == "") $("#panelGlassData").hide();
    if (glassType == "0") $("#panelGlassTypeData").hide();
    if (triplex == "") $("#panelTriplexData").hide();
    if (motiv == "") $("#panelMotivData").hide();

    //$("#blindwidthData").html('<strong>Blind Width:</strong> ' + blind_width);
    $("#panelCutData").html("<strong>Κοπή πάνελ:</strong> " + panel_cut);
    $("#panelCutDimData").html(
        "<strong>Διαστάσεις κοπής:</strong> " + panel_cut_dim,
    );

    //console.log("Panel Cut"+panel_cut);

    if (panel_cut != "YES") $("#panelCutData").hide();
    if (panel_cut_dim == "") $("#panelCutDimData").hide();

    $("#inox316Data").html("<strong>Inox 316:</strong> " + inox_316);

    if (inox_316 != "YES") $("#inox316Data").hide();

    //Customer Info
    $("#firstNameData").html("<strong>Όνομα:</strong> " + fname);
    $("#lastNameData").html("<strong>Επώνυμο:</strong> " + lname);
    $("#addressData").html("<strong>Διεύθυνση:</strong> " + address);
    $("#emailaddressData").html("<strong>Email:</strong> " + email);
    $("#phoneData").html("<strong>Τηλέφωνο:</strong> " + phone);

    //Offer Details
    $("#quantityData").html("<strong>Ποσότητα:</strong> " + quantity);
    $("#panel1CostData").html("<strong>Κόστος πάνελ(τμχ):</strong> " + panelCost);
    $("#panelCostData").html("<strong>Κόστος πάνελ:</strong> " + panelCost);
    $("#panelExtraCostData").html(
        "<strong>Επιπλέον κόστος:</strong> " + panelExtraCost,
    );
    $("#panelColorOutCostData").html(
        "<strong>Κόστος εξωτερικού χρώματος:</strong> " + panelColorOutCost,
    );
    $("#panelColorInCostData").html(
        "<strong>Κόστος εσωτερικού χρώματος:</strong> " + panelColorInCost,
    );
    $("#panelWidthCostData").html(
        "<strong>Κόστος πάχους πάνελ:</strong> " + panelWidthCost,
    );
    $("#panelCutCostData").html(
        "<strong>Κόστος κοπής:</strong> " + panelCutCost,
    );
    $("#panelInoxCostData").html(
        "<strong>Κόστος inox:</strong> " + panelInoxCost,
    );
    /*$("#panelGlassCostData").html(
        "<strong>Κόστος γυαλιού:</strong> " + panelGlassCost,
    );*/
	if (glass || triplex) {
        $("#panelGlassCostData").html(
            "<strong>Κόστος γυαλιού:</strong> " + panelGlassCost,
        );
        $("#panelGlassCostData").show();
    } else {
        $("#panelGlassCostData").hide();
    }
    $("#panelTriplexCostData").html(
        "<strong>Κόστος triplex:</strong> " + panelTriplexCost,
    );

    if (panelColorInCost == "") $("#panelColorInCostData").hide();
    if (panelTriplexCost == "") $("#panelTriplexCostData").hide();
    if (panelGlassCost == "--Επιλέξτε μια επιλογή γυαλιού--")
        $("#panelGlassCostData").hide();

    if (panelExtraCost == "0") $("#panelExtraCostData").hide();
    if (panelCutCost == "0") $("#panelCutCostData").hide();
    if (panelInoxCost == "0") $("#panelInoxCostData").hide();

    //Total Details
    var panel_cost = parseFloat(panelCost.replace(/[^0-9,.-]/g, "").replace(",", ".")) || 0;
    var quantity_val = parseInt(quantity) || 1;
    var discount_percentage = parseFloat($("#discount").val() || 0);

    // Calculate discount on panel cost only
    var panel_discount = parseFloat(((panel_cost * quantity_val) * (discount_percentage / 100)).toFixed(2));
    var discounted_panel_cost = parseFloat(((panel_cost * quantity_val) - panel_discount).toFixed(2));

    // Calculate other costs
    var total_cost = parseFloat(totalCost.replace(/[^0-9,.-]/g, "").replace(",", ".")) || 0;
    var base_total = parseFloat(((total_cost * quantity_val) - (panel_cost * quantity_val) + discounted_panel_cost).toFixed(2));
    var vat_value = parseFloat(vat) || 1;
    var vat_amount = parseFloat((base_total * (vat_value - 1)).toFixed(2));
    var final_total = parseFloat((base_total + vat_amount).toFixed(2));
	
	//if (quantity_val > 1) { $("#panel1CostData").show(); }
	//if (quantity_val == 1) { $("#panel1CostData").hide(); }
	
    // Update display for panel cost discount
    if (discount_percentage > 0 && quantity_val > 1) {
        $("#panelCostData").html("<strong>Κόστος πάνελ(τμχ):</strong> " + formatCurrency(panel_cost) + "<p style='margin-bottom: 0.4rem !important;margin-top: 0.4rem !important;'><strong>Κόστος πάνελ:</strong> " + formatCurrency(panel_cost * quantity_val) + "</p>" +
            "<p style='margin-bottom: 0.4rem !important;margin-top: 0.4rem !important;'><strong>Έκπτωση κόστους πάνελ (" + discount_percentage + "%):</strong> -" + formatCurrency(panel_discount) + "</p>");
    }
	
	if (discount_percentage > 0 && quantity_val == 1) {
        $("#panelCostData").html("<strong>Κόστος πάνελ:</strong> " + formatCurrency(panel_cost * quantity_val) + 
            "<br><p style='margin-bottom: 0.4rem !important;margin-top: 0.4rem !important;'><strong>Έκπτωση κόστους πάνελ (" + discount_percentage + "%):</strong> -" + formatCurrency(panel_discount) + "</p>");
    }

    if (isNaN(base_total)) base_total = 0;
    if (isNaN(vat_amount)) vat_amount = 0;
    if (isNaN(final_total)) final_total = 0;

    console.log("Κόστος χωρίς ΦΠΑ: " + base_total);
    console.log("Κόστος ΦΠΑ: " + vat_amount);
    console.log("Τελικό κόστος: " + final_total);
    console.log(
        "Ποσό έκπτωσης (" + discount_percentage + "%): " + panel_discount,
    );
    console.log("Τελικό κόστος: " + final_total);

    var vat_percentage = ((parseFloat(vat) - 1) * 100).toFixed(0);
    $("#totalCostData").html(
        "<strong>Κόστος χωρίς ΦΠΑ:</strong> " + formatCurrency(base_total),
    );
    $("#vat_cost").html(
        "<strong>ΦΠΑ (" +
            vat_percentage +
            "%):</strong> " +
            formatCurrency(vat_amount),
    );
    $("#subtotalData").html(
        "<strong>Τελικό κόστος:</strong> " + formatCurrency(final_total),
    );
    if (discount_percentage > 0) {
        $("#discountData").html(
            "<strong>Εκπτωση (" +
                discount_percentage +
                "%):</strong> -" +
                formatCurrency(panel_discount),
        );
        $("#discountData").show();
        $("#discount_cost").html(
            "<strong>Κόστος έκπτωσης:</strong> -" +
                formatCurrency(panel_discount),
        );
        $("#discount_cost").show();
    } else {
        $("#discountData").hide();
        $("#discount_cost").hide();
    }
    $("#final_cost").html(
        "<strong>Τελικό κόστος:</strong> " + formatCurrency(final_total),
    );

    //Extra Details
    //$("#requirementdetailsData").html('<strong>Offer Details:</strong><br> ' + requirementdetails);
    $("#additionalinfoData").html(
        "<strong>Επιπρόσθετες Πληροφορίες:</strong><br> " + additionalinfo,
    );
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
        $("#section-4 .help-block.with-errors.mandatory-error").html("");
        $("#section-4").removeClass("open");
        $("#section-4").addClass("slide-left");
        $("#section-5").removeClass("slide-right");
        $("#section-5").addClass("open");
    } else {
        $("#section-4 .help-block.with-errors.mandatory-error").html(
            '<ul class="list-unstyled"><li>Συμπληρώστε σωστά τη Φόρμα</li></ul>',
        );
        $("html,body").animate(
            {
                scrollTop:
                    $(
                        "#section-4 .help-block.with-errors.mandatory-error",
                    ).offset().top - 80,
            },
            "slow",
        );
        sweetAlert("Oops...", "Συμπληρώστε σωστά τη Φόρμα!!!", "error");
    }
}

function previousStep4() {
    $("#section-4").removeClass("slide-left");
    $("#section-4").addClass("open");
    $("#section-5").removeClass("open");
    $("#section-5").addClass("slide-right");
}

function formatCurrency(value) {
    return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
    }).format(value);
}
// Add event listeners to color selects after document is ready
$(document).ready(function() {
    $('#panel_color').on('change', function() {
        const selectedColorOption = this.options[this.selectedIndex];
        if (selectedColorOption) {
            const colorCost = selectedColorOption.getAttribute('data-cost');
            if (colorCost) {
                const cost = parseFloat(colorCost.replace(/[^0-9,.-]/g, "").replace(",", "."));
                const isTwoColors = $('input[name="panelColorOutInOption"]:checked').val() === "2";
                const finalCost = isTwoColors ? cost / 2 : cost;
                $('#panelColorOutCost').text(formatCurrency(finalCost));
                populateSubColorOptions($('#subColor')[0], this.value);
            } else {
                $('#panelColorOutCost').text('--No cost available--');
            }
        } else {
            $('#panelColorOutCost').text('--Select a Color--');
        }
    });

    $('#panel_color_in').on('change', function() {
        const selectedColorOption = this.options[this.selectedIndex];
        if (selectedColorOption) {
            const colorInCost = selectedColorOption.getAttribute('data-cost');
            if (colorInCost) {
                const cost = parseFloat(colorInCost.replace(/[^0-9,.-]/g, "").replace(",", "."));
                const isTwoColors = $('input[name="panelColorOutInOption"]:checked').val() === "2";
                const finalCost = isTwoColors ? cost / 2 : cost;
                $('#panelColorInCost').text(formatCurrency(finalCost));
                populateSubColorInOptions($('#subColorIn')[0], this.value);
            } else {
                $('#panelColorInCost').text('--No cost available--');
            }
        } else {
            $('#panelColorInCost').text('--Select an Interior Color--');
        }
    });

    // Add listener for color option change to recalculate costs
    $('input[name="panelColorOutInOption"]').on('change', function() {
        $('#panel_color').trigger('change');
        $('#panel_color_in').trigger('change');
    });
});