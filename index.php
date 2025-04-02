<?php
	require_once('protect.php');
?>
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8">
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
    <meta name="viewport" content="width=device-width, minimum-scale=1, maximum-scale=1" />
	<!--<meta http-equiv="Content-Security-Policy" content="default-src 'unsafe-inline' *; script-src 'unsafe-eval'">-->

    <title>Verpan ALU Configurator</title>
    <meta name="description" content="Add your website description here">
    <meta name="keywords" content="Add your website keywords here">
    <link href="images/favicon.ico" rel="icon">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/fontawesome/all.min.css">
    <link rel="stylesheet" href="css/bootstrap-datepicker3.min.css">
    <link rel="stylesheet" href="css/sweetalert.css" type="text/css">
    <link rel="stylesheet" href="css/multi-step-form.css" type="text/css">
    <link rel="stylesheet" href="css/multi-step-form-modern.css" type="text/css">
  </head>
  <body>
    <div class="QuoteForm-section wrapper">
      <div class="display-table">
        <div class="display-table-cell">
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <div class="form-wrap clearfix">
				<div style="text-align: center; margin: 10px auto;display:none;">
                    <img src="images/gr.png" style="width: 30px; height: 20px; margin-right: 10px; cursor: pointer; vertical-align: middle;" onclick="changeLanguage('gr')" alt="Ελληνικά"/>
                    <img src="images/en.png" style="width: 30px; height: 20px; cursor: pointer; vertical-align: middle;" onclick="changeLanguage('en')" alt="English"/>
                </div>
				<img style="margin: auto;display: block;" src="images/logo_beta.png"/>
                  <!--<h2 class="form-title">Verpan ALU Configurator</h2>
                  <div class="intro-text text-center"></div>-->
                  <div class="row">
                    <!--<div class="col-md-8">-->
                      <form id="QuoteForm" name="QuoteForm" data-toggle="validator" class="QuoteForm" enctype="multipart/form-data">
                        <div class="section-wrap">

						<!-- STEP 1 -->

                          <div id="section-1" class="section">
                            <fieldset>
                              <h3 class="section-title" style="font-size: 1.25rem !important;">Βήμα 1 από 5</h3>
                              <div class="progress">
                                <div class="progress-bar" style="width: 0%;">
                                  <div class="progress-bar-text">Ολοκληρώσατε το 0%</div>
                                </div>
                              </div>
                              <div class="form-layer-steps mgscmultisteptheme2 form-layer-tolal-steps-5">
                                <div class="form-layer-progress">
                                  <div class="form-layer-progress-line" style="width: 0%;"></div>
                                </div>
                                <div class="form-layer-step">
                                  <div class="form-layer-step-icon activestep">1</div>
                                  <p class="steptitle">Μοντέλο</p>
                                </div>
                                <div class="form-layer-step">
                                  <div class="form-layer-step-icon">2</div>
                                  <p class="steptitle">Διαμόρφωση</p>
                                </div>
                                <div class="form-layer-step">
                                  <div class="form-layer-step-icon">3</div>
                                  <p class="steptitle">Πελάτης</p>
                                </div>
                                <div class="form-layer-step">
                                  <div class="form-layer-step-icon">4</div>
                                  <p class="steptitle">Λεπτομέρειες</p>
                                </div>
                                <div class="form-layer-step currentstep">
                                  <div class="form-layer-step-icon"><i class="fas fa-check"></i></div>
                                  <p class="steptitle">Αναφορά</p>
                                </div>
                              </div>
                              <div class="help-block with-errors mandatory-error"></div>

                              <h4 data-translate="Select ALU Line">Επιλέξτε σειρά ALU:</h4>

                              <div class="form-group validreqsevice">
                                <select class="form-control" name="panel_line" id="panel_line" required data-error="Επιλέξτε μια σειρά">
                                  <option value="" data-translate="Select Line">--- Επιλέξτε σειρά ALU ---</option>
                                </select>
                                <div class="input-group-icon"><i class="fa-solid fa-gear"></i></div>
                                <div class="help-block with-errors"></div>
                              </div>

                              <h4 data-translate="Select Model">Επιλέξτε μοντέλο πάνελ:</h4>

                              <div class="form-group validreqfeatures">
                                <select class="form-control" name="panel_model" id="panel_model" required data-error="Επιλέξτε μοντέλο">
                                  <option value="">--- Επιλέξτε μοντέλο ---</option>
                                </select>
                                <div class="input-group-icon"><i class="fa-solid fa-bars"></i></div>
                                <div class="help-block with-errors"></div>
                              </div>

							<div><h4 style='display:inline' data-translate="Panel model description">Περιγραφή μοντέλου πάνελ : </h4> <p class="steptitle" id="panel_model_description" style='display:inline'></p></div>

							<div><h4 style='display:inline' data-translate="Panel model dimensions">Διαστάσεις μοντέλου πάνελ : </h4><p class="steptitle" id="panel_model_dimension" style='display:inline'></p></div>

							<div><h4 style='display:inline' data-translate="Cost of panel model">Κόστος μοντέλου πάνελ : </h4><p class="steptitle" id="panel_model_cost" style='display:inline'></p></div>

							<div class="form-group quoteForm-step-1"> 
								<!--<button class="btn btn-default disable" type="button">-</button>-->
								<button class="btn btn-custom float-end" onclick="nextStep2()" type="button">Επόμενο 
								<span class="fa-solid fa-arrow-right"></span></button>
							</div>
                            </fieldset>
							</div>

						 <!-- STEP 2 -->  

                          <div id="section-2" class="section slide-right">
                            <fieldset>
                              <h3 class="section-title" style="font-size: 1.25rem !important;">Βήμα 2 από 5</h3>
                              <div class="progress">
                                <div class="progress-bar" style="width: 25%;">
                                  <div class="progress-bar-text">Ολοκληρώσατε το 25%</div>
                                </div>
                              </div>
                              <div class="form-layer-steps mgscmultisteptheme2 form-layer-tolal-steps-5">
                                <div class="form-layer-progress">
                                  <div class="form-layer-progress-line" style="width: 30%;"></div>
                                </div>
                                <div class="form-layer-step">
                                  <div class="form-layer-step-icon activestep">1</div>
                                  <p class="steptitle">Μοντέλο</p>
                                </div>
                                <div class="form-layer-step">
                                  <div class="form-layer-step-icon">2</div>
                                  <p class="steptitle">Διαμόρφωση</p>
                                </div>
                                <div class="form-layer-step">
                                  <div class="form-layer-step-icon">3</div>
                                  <p class="steptitle">Πελάτης</p>
                                </div>
                                <div class="form-layer-step">
                                  <div class="form-layer-step-icon">4</div>
                                  <p class="steptitle">Λεπτομέρειες</p>
                                </div>
                                <div class="form-layer-step currentstep">
                                  <div class="form-layer-step-icon"><i class="fas fa-check"></i></div>
                                  <p class="steptitle">Αναφορά</p>
                                </div>
                              </div>
							<div class="help-block with-errors mandatory-error"></div>


							<h4 data-translate="Panel Glass Section">ΕΝΟΤΗΤΑ ΓΥΑΛΙΟΥ ΠΑΝΕΛ</h4>
							<div><h4 style='display:inline' data-translate="Number of glasses">Αριθμός τζαμιών: </h4> <p class="steptitle" id="model_glass_num" style='display:inline'></p></div>

							<div><h4 style='display:inline' data-translate="Type of glass">Τύπος γυαλιού: </h4><p class="steptitle" id="model_glass_type" style='display:inline'></p></div>

							<div><h4 style='display:inline' data-translate="Cost of glass">Κόστος γυαλιού: </h4><p class="steptitle" id="glass_cost" style='display:inline'></p></div>
							<div><h4 style='display:inline' data-translate="Cost of triplex">Κόστος triplex: </h4><p class="steptitle" id="triplex_cost" style='display:inline'></p></div>


							<br/>

							<div class="form-group validsimpleglass" id="glass_simple_div" style="display: none;"> 
								<label for="glass_simple" data-translate="Choose Glass Simple">Επιλέξτε Γυαλί (Simple):</label>
								<select class="form-control" name="glass_simple" id="glass_simple" required data-error="Επιλέξτε Γυαλί (Simple)">
									<option value="">--- Επιλέξτε Γυαλί (Simple) ---</option>
								</select>
								<div class="input-group-icon" style="height: auto !important;bottom: 0 !important;top: auto !important;"><i class="fa-solid fa-gear"></i></div>
								<div class="help-block with-errors"></div>
							</div>

							  <div class="form-group validtriplexglass" id="glass_triplex_div" style="display: none;">
								<label for="glass_triplex" data-translate="Choose Glass Triplex">Επιλέξτε Γυαλί (Triplex):</label>
                                <select class="form-control" name="glass_triplex" id="glass_triplex" required data-error="Επιλέξτε Γυαλί (Triplex)">
                                  <option value="">--- Επιλέξτε Γυαλί (Triplex) ---</option>
                                </select>
								<div class="input-group-icon" style="height: auto !important;bottom: 0 !important;top: auto !important;"><i class="fa-solid fa-gear"></i></div>
                                <div class="help-block with-errors"></div>
                              </div>


								<hr>

								<h4 data-translate="Panel Dimensions Section">ΕΝΟΤΗΤΑ ΔΙΑΣΤΑΣΕΩΝ ΠΑΝΕΛ</h4>

							  <div><h4 style='display:inline' data-translate="Current Panel Default Dimensions">Τρέχουσες προεπιλεγμένες διαστάσεις του πάνελ: </h4><p class="steptitle" id="current_panel_dimension" style='display:inline'></p></div>

                              <div class="form-group validpaneldimensions" style="margin: 0 0 5px !important;">
                                <select class="form-control" name="panel_dimensions" id="panel_dimensions">
                                  <option value="">--- Επιλέξτε διαφορετική διάσταση ---</option>
                                </select>
								<div class="input-group-icon"><i class="fa-solid fa-gear"></i></div>
                                <div class="help-block with-errors"></div>
                              </div>
							  <div id="panelExtraCost" style="display:none;font-weight: bold;text-align: right;">0</div>

							  <hr>
								<div id="glass_motiv_section" style="display:none">
									<h4 data-translate="Glass Motiv Section">ΕΝΟΤΗΤΑ ΜΟΤΙΒΟΥ</h4>

									  <div class="form-group validglassmotiv">
										<select class="form-control" name="glass_motiv" id="glass_motiv">
										  <option value="">--- Επιλέξτε μοτίβο γυαλιού ---</option>
										</select>
										<div class="input-group-icon"><i class="fa-solid fa-gear"></i></div>
										<div class="help-block with-errors"></div>
									  </div>
									  <hr>
								</div>




							  <h4 data-translate="Panel Color Section">ΕΝΟΤΗΤΑ ΧΡΩΜΑΤΟΣ ΠΑΝΕΛ</h4>
								<form>
									<label>
										<input type="radio" name="panelColorOutInOption" value="1" checked> Μονόχρωμο πάνελ
									</label>
									<label>
										<input type="radio" name="panelColorOutInOption" value="2"> Δίχρωμο πάνελ
									</label>
								</form>

                              <div class="form-group validcolor" style="padding-top:20px;margin: 0 0 5px !important;">
								<label for="panel_color" data-translate="Choose panel color out">Επιλέξτε χρώμα πάνελ (εξωτερικό):</label>
                                <select class="form-control" name="panel_color" id="panel_color" required data-error="Επιλέξτε χρώμα">
                                  <option value="">--- Επιλέξτε χρώμα ---</option>
                                </select>
								<div class="input-group-icon" style="height: auto !important;bottom: 0 !important;top: auto !important;"><i class="fa-solid fa-gear"></i></div>
                                <div class="help-block with-errors"></div>
                              </div>
							  <div id="panelColorOutCost" style="display:block;font-weight: bold;text-align: right;"></div>

							  <div class="form-group validcolor" id="subColorDiv">
								<label for="subColor" data-translate="Choose panel sub color out">Επιλέξτε δευτερεύον χρώμα (εξωτερικό):</label>
                                <select class="form-control" name="subColor" id="subColor" data-error="Επιλέξτε δευτερεύον χρώμα">
                                  <option value="">--- Επιλέξτε δευτερεύον χρώμα ---</option>
                                </select>
								<div class="input-group-icon" style="height: auto !important;bottom: 0 !important;top: auto !important;"><i class="fa-solid fa-gear"></i></div>
                                <div class="help-block with-errors"></div>
                              </div>

							  <div class="form-group validcolor" id="subNoColorDiv" style="display:none">
								<label for="subNoColor" data-translate="Provide panel sub color">Προσθέστε δευτερεύον χρώμα (εξωτερικό):</label>
                                <div class="form-group validsubnocolor">
                                <input class="form-control" name="subNoColor" id="subNoColor" type="text" placeholder="panel sub color" data-error="Please enter panel sub color">
                                <div class="input-group-icon"><i class="fa-solid fa-gear"></i></div>
                                <div class="help-block with-errors"></div>
								</div>
                              </div>
							  <hr>

							  <div id="panelColorInDiv" style="display:none">

								<div class="form-group validcolor" style="margin: 0 0 5px !important;">
									<label for="panel_color_in" data-translate="Choose panel color in">Επιλέξτε χρώμα πάνελ (εσωτερικό):</label>
									<select class="form-control" name="panel_color_in" id="panel_color_in" required data-error="Please Select panel color">
									  <option value="">--- Επιλέξτε χρώμα ---</option>
									</select>
									<div class="input-group-icon" style="height: auto !important;bottom: 0 !important;top: auto !important;"><i class="fa-solid fa-gear"></i></div>
									<div class="help-block with-errors"></div>
								</div>
								<div id="panelColorInCost" style="display:block;font-weight: bold;text-align: right;"></div>


								<div class="form-group validcolor" id="subColorInDiv">
									<label for="subColorIn" data-translate="Choose panel sub color in">Επιλέξτε δευτερεύον χρώμα (εσωτερικό):</label>
									<select class="form-control" name="subColorIn" id="subColorIn" data-error="Επιλέξτε δευτερεύον χρώμα">
									  <option value="">--- Επιλέξτε δευτερεύον χρώμα ---</option>
									</select>
									<div class="input-group-icon" style="height: auto !important;bottom: 0 !important;top: auto !important;"><i class="fa-solid fa-gear"></i></div>
									<div class="help-block with-errors"></div>
								</div>

								<div class="form-group validcolor" id="subNoColorInDiv" style="display:none">
									<label for="subNoColorIn" data-translate="Provide panel sub color in">Προσθέστε δευτερεύον χρώμα (εσωτερικό):</label>
									<div class="form-group validsubnocolorin">
										<input class="form-control" name="subNoColorIn" id="subNoColorIn" type="text" placeholder="Προσθέστε δευτερεύον χρώμα" data-error="Προσθέστε δευτερεύον χρώμα">
										<div class="input-group-icon"><i class="fa-solid fa-gear"></i></div>
										<div class="help-block with-errors"></div>
									</div>
								</div>

							  </div>

							  <hr>

							  <h4 data-translate="Panel Width Section">ΕΝΟΤΗΤΑ ΠΑΧΟΥΣ ΠΑΝΕΛ</h4>

                              <div class="form-group validpanelwidth" style="margin: 0 0 5px !important;">
								<label for="panelWidth" data-translate="Choose panel width">Επιλέξτε γέμιση και πάχος πάνελ :</label>
                                <select class="form-control" name="panelWidth" id="panelWidth" required data-error="Please Select panel width">
                                  <option value="">--- Επιλέξτε πλάτος πάνελ ---</option>
                                </select>
								<div class="input-group-icon" style="height: auto !important;bottom: 0 !important;top: auto !important;"><i class="fa-solid fa-gear"></i></div>
                                <div class="help-block with-errors"></div>
                              </div>

							  <div id="panelWidthCost" style="font-weight: bold;text-align: right;"></div>

							  <hr>

							  <h4 data-translate="Select Panel Cut">Επιλέξτε κοπή πάνελ:</h4>
							  <div class="form-group validcut" style="margin: 0 0 5px !important;">
                                <ul class="mgsstyle-checkbox mgscheckbox-style list-unstyled" style="margin-bottom: 0 !important;">
                                  <li>
                                    <input name="panel_cut" id="panel_cut" value="YES" type="checkbox">
                                    <label for="panel_cut">ΝΑΙ</label>
                                  </li>
                                </ul>
                                <div class="help-block with-errors"></div>
                              </div>

							  <div class="form-group validcolor" id="panelCutDiv" style="display:none;margin: 0 0 5px !important;">
									<label for="panelCutDim" data-translate="Provide dimension">Προσθέστε διάσταση κοπής (mm) :</label>
									<div class="form-group validpanelcutdiv" style="margin: 0 0 5px !important;">
										<input class="form-control" name="panelCutDim" id="panelCutDim" type="text" placeholder="Διάσταση κοπής (mm)" required data-error="Please enter panel cut text">
										<div class="input-group-icon"><i class="fa-solid fa-gear"></i></div>
										<div class="help-block with-errors"></div>
									</div>
								</div>

							  <div id="panelCutCost" style="display:none;font-weight: bold;text-align: right;">0</div>

								<hr>


							  <h4 data-translate="Select Inox 316">Επιλέξτε Inox 316:</h4>
							  <div class="form-group validinox" style="margin: 0 0 5px !important;">
                                <ul class="mgsstyle-checkbox mgscheckbox-style list-unstyled" style="margin-bottom: 0 !important;">
                                  <li>
                                    <input name="inox_316" id="inox_316" value="YES" type="checkbox">
                                    <label for="inox_316">ΝΑΙ</label>
                                  </li>
                                </ul>
                                <div class="help-block with-errors"></div>
                              </div>
		  <div id="panelInoxCost" style="display:none; font-weight: bold;text-align: right;">0</div>

		  <hr>
		  <hr>
		  <div id="totalCost" style="padding-bottom: 40px;font-weight: bold;text-align: right;"></div>



                              <!--<h4>Project Priority*:</h4>
                              <div class="form-group validpriority">
                                <span class="radio-inline mgsradio-circle-buttons">
                                  <input type="radio" name="priority" id="priority1" value="Low"> 
                                  <label for="priority1">Low
                                  </label>
                                  <div class="check"></div>
                                </span>
                                <span class="radio-inline mgsradio-circle-buttons">
                                  <input type="radio" name="priority" id="priority2" value="Medium"> 
                                  <label for="priority2">Medium
                                  </label>
                                  <div class="check"></div>
                                </span>
                                <span class="radio-inline mgsradio-circle-buttons">
                                  <input type="radio" name="priority" id="priority3" value="Urgent"> 
                                  <label for="priority3">Urgent
                                  </label>
                                  <div class="check"></div>
                                </span>
                                <div class="help-block with-errors"></div>
                              </div>
                              <h4>Estimated Launch Date*:</h4>
                              <div id="estimated-launch-date" class="form-group validlaunchdate">
                                <input type="text" class="form-control" name="launchdate" id="launchdate" placeholder="dd MM, yyyy" required data-error="Please Select Launch Date">
                                <div class="input-group-icon"><i class="fa-solid fa-calendar"></i></div>
                                <div class="help-block with-errors"></div>
                              </div>-->
                              <div class="form-group quoteForm-step-2"> <button class="btn btn-custom" type="button" onclick="previousStep1()">
                                <span class="fa-solid fa-arrow-left">
                                </span> Προηγούμενο</button> <button class="btn btn-custom float-end" type="button" onclick="nextStep3()">Επόμενο 
                                <span class="fa-solid fa-arrow-right">
                                </span></button>
                              </div>
                            </fieldset>
                          </div>
                          <div id="section-3" class="section slide-right">
                            <fieldset>
                              <h3 class="section-title" style="font-size: 1.25rem !important;">Βήμα 3 από 5</h3>
                              <div class="progress">
                                <div class="progress-bar" style="width: 50%;">
                                  <div class="progress-bar-text">Ολοκληρώσατε το 50%</div>
                                </div>
                              </div>
                              <div class="form-layer-steps mgscmultisteptheme2 form-layer-tolal-steps-5">
                                <div class="form-layer-progress">
                                  <div class="form-layer-progress-line" style="width: 50%;"></div>
                                </div>
                                <div class="form-layer-step">
                                  <div class="form-layer-step-icon activestep">1</div>
                                  <p class="steptitle">Μοντέλο</p>
                                </div>
                                <div class="form-layer-step">
                                  <div class="form-layer-step-icon">2</div>
                                  <p class="steptitle">Διαμόρφωση</p>
                                </div>
                                <div class="form-layer-step">
                                  <div class="form-layer-step-icon">3</div>
                                  <p class="steptitle">Πελάτης</p>
                                </div>
                                <div class="form-layer-step">
                                  <div class="form-layer-step-icon">4</div>
                                  <p class="steptitle">Λεπτομέρειες</p>
                                </div>
                                <div class="form-layer-step currentstep">
                                  <div class="form-layer-step-icon"><i class="fas fa-check"></i></div>
                                  <p class="steptitle">Αναφορά</p>
                                </div>
                              </div>
							  <div class="help-block with-errors mandatory-error"></div>

                              <h4 data-translate="Provide Customer Info">Εισάγετε Στοιχεία Πελάτη:</h4>
							  <div class="form-group validfname">
                                <input class="form-control" name="fname" id="fname" type="text" placeholder="Όνομα πελάτη*" required data-error="Please enter First Name">
                                <div class="input-group-icon"><i class="fa-solid fa-user"></i></div>
                                <div class="help-block with-errors"></div>
                              </div>
                              <div class="form-group validlname">
                                <input class="form-control" name="lname" id="lname" type="text" placeholder="Επώνυμο πελάτη*" required data-error="Please enter Last Name">
                                <div class="input-group-icon"><i class="fa-solid fa-user"></i></div>
                                <div class="help-block with-errors"></div>
                              </div>
                              <div class="form-group validaddress">
                                <input class="form-control" name="address" id="address" type="text" placeholder="Διεύθυνση πελάτη*" required data-error="Please enter address">
                                <div class="input-group-icon"><i class="fa-solid fa-location-dot"></i></div>
                                <div class="help-block with-errors"></div>
                              </div>
                              <div class="form-group validemail">
                                <input class="form-control" name="email" id="email" type="email" placeholder="Email Πελάτη*" required data-error="Please enter valid email">
                                <div class="input-group-icon"><i class="fa-solid fa-envelope"></i></div>
                                <div class="help-block with-errors"></div>
                              </div>
                              <div class="form-group validphone">
                                <input class="form-control" name="phone" id="phone" type="text" placeholder="Τηλέφωνο πελάτη*" required data-error="Please enter valid phone">
                                <div class="input-group-icon"><i class="fa-solid fa-phone"></i></div>
                                <div class="help-block with-errors"></div>
                              </div>
                              <div class="form-group quoteForm-step-3"> <button class="btn btn-custom" type="button" onclick="previousStep2()">
                                <span class="fa-solid fa-arrow-left">
                                </span> Προηγούμενο</button> <button id="nextStepFour" class="btn btn-custom float-end" type="button" onclick="nextStep4()">Επόμενο 
                                <span class="fa-solid fa-arrow-right">
                                </span></button>
                              </div>
                            </fieldset>
                          </div>
                          <div id="section-4" class="section slide-right">
                            <fieldset>
                              <h3 class="section-title" style="font-size: 1.25rem !important;">Βήμα 4 από 5</h3>
                              <div class="progress">
                                <div class="progress-bar" style="width: 75%;">
                                  <div class="progress-bar-text">Ολοκληρώσατε το 75%</div>
                                </div>
                              </div>
                              <div class="form-layer-steps mgscmultisteptheme2 form-layer-tolal-steps-5">
                                <div class="form-layer-progress">
                                  <div class="form-layer-progress-line" style="width: 70%;"></div>
                                </div>
                                <div class="form-layer-step">
                                  <div class="form-layer-step-icon activestep">1</div>
                                  <p class="steptitle">Μοντέλο</p>
                                </div>
                                <div class="form-layer-step">
                                  <div class="form-layer-step-icon">2</div>
                                  <p class="steptitle">Διαμόρφωση</p>
                                </div>
                                <div class="form-layer-step">
                                  <div class="form-layer-step-icon">3</div>
                                  <p class="steptitle">Πελάτης</p>
                                </div>
                                <div class="form-layer-step">
                                  <div class="form-layer-step-icon">4</div>
                                  <p class="steptitle">Λεπτομέρειες</p>
                                </div>
                                <div class="form-layer-step currentstep">
                                  <div class="form-layer-step-icon"><i class="fas fa-check"></i></div>
                                  <p class="steptitle">Αναφορά</p>
                                </div>
                              </div>
                              <div class="help-block with-errors mandatory-error"></div>


							  <div class="form-group validquantity">
							  <label for="vat" data-translate="Provide Quantity">Εισάγετε ποσότητα:</label>
                                <input class="form-control" name="quantity" id="quantity" type="text" placeholder="Ποσότητα*" value="1" required data-error="Please enter valid quantity">
                                <div class="input-group-icon" style="height: auto !important;bottom: 0 !important;top: auto !important;"><i class="fa-solid fa-bars"></i></div>
                                <div class="help-block with-errors"></div>
                              </div>

							  <div class="form-group validvat">
								<label for="vat" data-translate="Choose Vat">Επιλέξτε ΦΠΑ:</label>
                                <select class="form-control" name="vat" id="vat">
                                  <option value="1.24" selected>24%</option>
                                  <option value="1.17">17%</option>
                                  <option value="1.09">9%</option>
                                  <option value="1.04">4%</option>
                                </select>
								<div class="input-group-icon" style="height: auto !important;bottom: 0 !important;top: auto !important;"><i class="fa-solid fa-gear"></i></div>
                                <div class="help-block with-errors"></div>
                              </div>


							  <div class="form-group validdiscount">
								<label for="vat" data-translate="Provide Discount">Εισάγετε έκπτωση (%):</label>
                                <input class="form-control" name="discount" id="discount" type="number" min="0" max="100" step="0.01" placeholder="Έκπτωση (%)" data-error="Please enter valid discount percentage">
                                <div class="input-group-icon" style="height: auto !important;bottom: 0 !important;top: auto !important;"><i class="fa-solid fa-bars"></i></div>
                                <div class="help-block with-errors"></div>
                              </div>

                              <h4 data-translate="Provide Additional Info">Εισάγετε πρόσθετες πληροφορίες:</h4>
                              <div class="form-group">
                                <textarea rows="3" name="additionalinfo" id="additionalinfo" placeholder="Εισαγωγή πρόσθετων πληροφοριών (προαιρετικό)" class="form-control" data-error="Provide Additional Info"></textarea>
                                <div class="input-group-icon"><i class="fa-solid fa-info"></i></div>
                                <div class="help-block with-errors"></div>
                              </div>

                              <div class="form-group quoteForm-step-4"> <button class="btn btn-custom" type="button" onclick="previousStep3()">
                                <span class="fa-solid fa-arrow-left">
                                </span> Προηγούμενο</button> <button class="btn btn-custom float-end" type="button" onclick="nextStep5()">Επόμενο 
                                <span class="fa-solid fa-arrow-right">
                                </span></button>
                              </div>
                            </fieldset>
                          </div>
                          <div id="section-5" class="section review-submit-section slide-right">
                            <fieldset>
                              <h3 class="section-title" style="font-size: 1.25rem !important;">Βήμα 5 από 5</h3>
                              <div class="progress">
                                <div class="progress-bar" style="width: 100%;">
                                  <div class="progress-bar-text">Ολοκληρώσατε το 100%</div>
                                </div>
                              </div>
                              <div class="form-layer-steps mgscmultisteptheme2 form-layer-tolal-steps-5">
                                <div class="form-layer-progress">
                                  <div class="form-layer-progress-line" style="width: 100%;"></div>
                                </div>
                               <div class="form-layer-step">
                                  <div class="form-layer-step-icon activestep">1</div>
                                  <p class="steptitle">Μοντέλο</p>
                                </div>
                                <div class="form-layer-step">
                                  <div class="form-layer-step-icon">2</div>
                                  <p class="steptitle">Διαμόρφωση</p>
                                </div>
                                <div class="form-layer-step">
                                  <div class="form-layer-step-icon">3</div>
                                  <p class="steptitle">Πελάτης</p>
                                </div>
                                <div class="form-layer-step">
                                  <div class="form-layer-step-icon">4</div>
                                  <p class="steptitle">Λεπτομέρειες</p>
                                </div>
                                <div class="form-layer-step currentstep">
                                  <div class="form-layer-step-icon"><i class="fas fa-check"></i></div>
                                  <p class="steptitle">Αναφορά</p>
                                </div>
                              </div>

							<script>
								var today = new Date();
								var dd = String(today.getDate()).padStart(2, '0');
								var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
								var yyyy = today.getFullYear();

								today = mm + '/' + dd + '/' + yyyy;

							</script>



							<div class="row">
								<!--<img style="float: right !important;" src="images/signature_right.jpg"/>
								<div class="column col-md-6 col-sm-12">
									<img src="images/signature_left.jpg"/>
								</div>
								<div class="column col-md-6 col-sm-12">
									<img style="float: right !important;" src="images/signature_right.jpg"/>
								</div>-->
							</div>
								<h4><span data-translate="Verpan Aluminium Panel Offer">Προσφορά Πάνελ Αλουμινίου Verpan</span> - <script>document.write(today);</script></h4>
                              <div class="row">
                                <div class="column col-md-6 col-sm-12">
								<h4 data-translate="Customer Info">Στοιχεία Πελάτη</h4>
                                  <div class="section-info-box">
                                    <p id="firstNameData" style="margin-bottom: 0.4rem !important;"></p>
                                    <p id="lastNameData" style="margin-bottom: 0.4rem !important;"></p>
                                    <p id="addressData" style="margin-bottom: 0.4rem !important;"></p>
                                    <p id="emailaddressData" style="margin-bottom: 0.4rem !important;"></p>
                                    <p id="phoneData" style="margin-bottom: 0.4rem !important;"></p>
                                  </div>

                                  <h4 data-translate="Panel Configuration">Διαμόρφωση Πάνελ</h4>
                                  <div class="section-info-box">
									<p id="lineData" style="margin-bottom: 0.4rem !important;"></p>
                                    <p id="modelData" style="margin-bottom: 0.4rem !important;"></p>
                                    <p id="dimensionsData" style="margin-bottom: 0.4rem !important;"></p>
                                    <p id="colorOutData" style="margin-bottom: 0.4rem !important;"></p>
                                    <p id="subColorOutData" style="margin-bottom: 0.4rem !important;"></p>
                                    <p id="subColorCustomOutData" style="margin-bottom: 0.4rem !important;"></p>
                                    <p id="colorInData" style="margin-bottom: 0.4rem !important;"></p>
                                    <p id="subColorInData" style="margin-bottom: 0.4rem !important;"></p>
                                    <p id="subColorCustomInData" style="margin-bottom: 0.4rem !important;"></p>
                                    <p id="panelwidthData" style="margin-bottom: 0.4rem !important;"></p>
									<p id="panelGlassTypeData" style="margin-bottom: 0.4rem !important;"></p>
                                    <p id="panelGlassData" style="margin-bottom: 0.4rem !important;"></p>
                                    <p id="panelTriplexData" style="margin-bottom: 0.4rem !important;"></p>
                                    <p id="panelMotivData" style="margin-bottom: 0.4rem !important;"></p>

                                    <p id="panelCutData" style="margin-bottom: 0.4rem !important;"></p>
									<p id="panelCutDimData" style="margin-bottom: 0.4rem !important;"></p>
                                    <p id="inox316Data" style="margin-bottom: 0.4rem !important;"></p>
                                  </div>
                                </div>

                                <div class="column col-md-6 col-sm-12">
                                  <h4 data-translate="Offer Details">Λεπτομέρειες Προσφοράς</h4>
                                  <div class="section-info-box">
                                    <p id="quantityData" style="margin-bottom: 0.4rem !important;"></p>
                                    <p id="panel1CostData" style="margin-bottom: 0.4rem !important; display:none"></p>
									<p id="panelCostData" style="margin-bottom: 0.4rem !important;"><strong><span data-translate="Panel cost">Panel cost</span>:</strong></p>
									<p id="panelExtraCostData" style="margin-bottom: 0.4rem !important;"><strong><span data-translate="Panel extra cost">Panel extra cost</span>:</strong></p>
									<p id="panelColorOutCostData" style="margin-bottom: 0.4rem !important;"><strong><span data-translate="Panel color out cost">Panel color out cost</span>:</strong></p>
									<p id="panelColorInCostData" style="margin-bottom: 0.4rem !important;"><strong><span data-translate="Panel color in cost">Panel color in cost</span>:</strong></p>
									<p id="panelWidthCostData" style="margin-bottom: 0.4rem !important;"><strong><span data-translate="Panel width cost">Panel width cost</span>:</strong></p>
									<p id="panelGlassCostData" style="margin-bottom: 0.4rem !important;"><strong><span data-translate="Panel glass cost">Panel glass cost</span>:</strong></p>
									<p id="panelTriplexCostData" style="margin-bottom: 0.4rem !important;"><strong><span data-translate="Panel triplex cost">Panel triplex cost</span>:</strong></p>
									<p id="panelCutCostData" style="margin-bottom: 0.4rem !important;"><strong><span data-translate="Panel cut cost">Panel cut cost</span>:</strong></p>
									<p id="panelInoxCostData" style="margin-bottom: 0.4rem !important;"><strong><span data-translate="Panel inox cost">Panel inox cost</span>:</strong></p>

									<hr>

									<p id="totalCostData" style="margin-bottom: 0.4rem !important;"><strong><span data-translate="Total cost">Total cost</span>:</strong></p>
									<p id="vat_cost" style="margin-bottom: 0.4rem !important;"><strong><span data-translate="VAT cost">VAT(24%) cost</span>:</strong></p>
									<p id="final_cost" style="margin-bottom: 0.4rem !important;"><strong><span data-translate="Final cost">Final cost</span>:</strong></p>

									<hr>

                  <p id="requirementdetailsData" style="margin-bottom: 0.4rem !important;"></p>
                                <p id="additionalinfoData" style="margin-bottom: 0.4rem !important;"></p>
                                    <p id="preferedcontactData" style="margin-bottom: 0.4rem !important;"></p>
                                  </div>
                  <hr>
                  <h4>Υπογραφή</h4>
									<div class="section-info-box">
										<div class="intro-text text-center">...</div>
									</div>
                                </div>
                                <hr>
                                <div class="form-group col-sm-12">
                                  <div id="humanCheckCaptchaBox"></div>
                                  <div id="firstDigit"></div>
                                  +
                                  <div id="secondDigit"></div>
                                  = 
                                  <input name="humanCheckCaptchaInput" id="humanCheckCaptchaInput" placeholder="" maxlength="3" class="form-control" type="text" required data-error="Please solve Captcha">
                                  <div class="help-block with-errors"></div>
                                </div>
                                <div class="col-sm-12">
                                  <p id="AggreData"><strong>Συμφωνώ με τους <a href="javascript:void(0)">Όρους &amp; Προϋποθέσεις</a>:</strong> 
                                    <input name="aggre2" id="aggre2" value="1" checked disabled type="checkbox">
                                  </p>
                                  <div id="mgsContactSubmit" class="hidden"></div>
                                  <div id="loading-image" style="display:none;"> <img src="images/loading-image.gif" alt="Processing" /></div>
                                  <div id="final-step-buttons" class="form-group quoteForm-step-5"> 
                                    <button class="btn btn-custom" type="button" onclick="previousStep4()">
                                      <span class="fa-solid fa-arrow-left"></span> Πίσω
                                    </button> 
                                    <button id="Submit" class="btn btn-custom" type="submit">Υποβολή</button>
                                    <button class="btn btn-custom" type="button" onclick="printOffer()">
                                      <span class="fa-solid fa-print"></span> Εκτύπωση
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </fieldset>
                          </div>
                        </div>
                      </form>
                    <!--</div>-->

                    <!--<div class="col-md-4">
                      <h3 class="section-title">Our Special Services</h3>
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="service-item">
                            <i class="fa-solid fa-desktop"></i>
                            <h4>Web Design</h4>
                          </div>
                        </div>
                        <div class="col-sm-12">
                          <div class="service-item">
                            <i class="fa-solid fa-paintbrush"></i>
                            <h4>Graphic Design</h4>
                          </div>
                        </div>
                        <div class="col-sm-12">
                          <div class="service-item">
                            <i class="fa-solid fa-cart-shopping"></i>
                            <h4>E-Commerce</h4>
                          </div>
                        </div>
                        <div class="col-sm-12">
                          <div class="service-item">
                            <i class="fa-brands fa-app-store-ios"></i>
                            <h4>App Development</h4>
                          </div>
                        </div>
                      </div>
                    </div>-->

                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="footer-top col-sm-12">
                <p class="text-center copyright">&copy; 
                  <span id="mgsYear"></span> All rights reserved. Verpan A.E.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script src="js/jquery-3.5.1.min.js"></script> 
    <script src="js/bootstrap-datepicker.min.js"></script> 
    <script src="js/sweetalert.min.js"></script> 
    <script src="js/validator.min.js"></script> 
    <script src="js/multistepform-pop1.js"></script> 
    <script src="js/google_sheet_connector.js"></script> 
  </body>
</html>