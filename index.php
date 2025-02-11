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
                              <h3 class="section-title" style="font-size: 1.25rem !important;">Step 1 of 5</h3>
                              <div class="progress">
                                <div class="progress-bar" style="width: 0%;">
                                  <div class="progress-bar-text">0% Complete</div>
                                </div>
                              </div>
                              <div class="form-layer-steps mgscmultisteptheme2 form-layer-tolal-steps-5">
                                <div class="form-layer-progress">
                                  <div class="form-layer-progress-line" style="width: 0%;"></div>
                                </div>
                                <div class="form-layer-step currentstep">
                                  <div class="form-layer-step-icon activestep">1</div>
                                  <p class="steptitle">Line/Model</p>
                                </div>
                                <div class="form-layer-step">
                                  <div class="form-layer-step-icon">2</div>
                                  <p class="steptitle">Dimensions</p>
                                </div>
                                <div class="form-layer-step">
                                  <div class="form-layer-step-icon">3</div>
                                  <p class="steptitle">Customer</p>
                                </div>
                                <div class="form-layer-step">
                                  <div class="form-layer-step-icon">4</div>
                                  <p class="steptitle">Details</p>
                                </div>
                                <div class="form-layer-step">
                                  <div class="form-layer-step-icon"><i class="fas fa-check"></i></div>
                                  <p class="steptitle">Report</p>
                                </div>
                              </div>
                              <div class="help-block with-errors mandatory-error"></div>
							  
                              <h4>Select ALU Line:</h4>
                              
                              <div class="form-group validreqsevice">
                                <select class="form-control" name="panel_line" id="panel_line" required data-error="Please Select a line">
                                  <option value="">--- Select Line ---</option>
                                </select>
                                <div class="input-group-icon"><i class="fa-solid fa-gear"></i></div>
                                <div class="help-block with-errors"></div>
                              </div>
							  
                              <h4>Select Model:</h4>
							  
                              <div class="form-group validreqfeatures">
                                <select class="form-control" name="panel_model" id="panel_model" required data-error="Please Select a model">
                                  <option value="">--- Select Model ---</option>
                                </select>
                                <div class="input-group-icon"><i class="fa-solid fa-bars"></i></div>
                                <div class="help-block with-errors"></div>
                              </div>
							  
							<div><h4 style='display:inline'>Panel model description : </h4> <p class="steptitle" id="panel_model_description" style='display:inline'></p></div>
							  
							<div><h4 style='display:inline'>Panel model dimensions : </h4><p class="steptitle" id="panel_model_dimension" style='display:inline'></p></div>
							
							<div><h4 style='display:inline'>Cost of panel model : </h4><p class="steptitle" id="panel_model_cost" style='display:inline'></p></div>
							
							<div class="form-group quoteForm-step-1"> 
								<!--<button class="btn btn-default disable" type="button">-</button>-->
								<button class="btn btn-custom float-end" onclick="nextStep2()" type="button">Next 
								<span class="fa-solid fa-arrow-right"></span></button>
							</div>
                            </fieldset>
							</div>
						  
						 <!-- STEP 2 -->  
						
                          <div id="section-2" class="section slide-right">
                            <fieldset>
                              <h3 class="section-title" style="font-size: 1.25rem !important;">Step 2 of 5</h3>
                              <div class="progress">
                                <div class="progress-bar" style="width: 25%;">
                                  <div class="progress-bar-text">25% Complete</div>
                                </div>
                              </div>
                              <div class="form-layer-steps mgscmultisteptheme2 form-layer-tolal-steps-5">
                                <div class="form-layer-progress">
                                  <div class="form-layer-progress-line" style="width: 30%;"></div>
                                </div>
                                <div class="form-layer-step">
                                  <div class="form-layer-step-icon activestep">1</div>
                                  <p class="steptitle">Line/Model</p>
                                </div>
                                <div class="form-layer-step currentstep">
                                  <div class="form-layer-step-icon">2</div>
                                  <p class="steptitle">Configuration</p>
                                </div>
                                <div class="form-layer-step">
                                  <div class="form-layer-step-icon">3</div>
                                  <p class="steptitle">Customer</p>
                                </div>
                                <div class="form-layer-step">
                                  <div class="form-layer-step-icon">4</div>
                                  <p class="steptitle">Details</p>
                                </div>
                                <div class="form-layer-step">
                                  <div class="form-layer-step-icon"><i class="fas fa-check"></i></div>
                                  <p class="steptitle">Report</p>
                                </div>
                              </div>
							<div class="help-block with-errors mandatory-error"></div>
							
							
							<h4 id="glass_select_label">PANEL GLASS SECTION</h4>
							<div><h4 style='display:inline'>Number of glasses: </h4> <p class="steptitle" id="model_glass_num" style='display:inline'></p></div>
							  
							<div><h4 style='display:inline'>Type of glass: </h4><p class="steptitle" id="model_glass_type" style='display:inline'></p></div>
							
							<div><h4 style='display:inline'>Cost of glass: </h4><p class="steptitle" id="glass_cost" style='display:inline'></p></div>
							<div><h4 style='display:inline'>Cost of triplex: </h4><p class="steptitle" id="triplex_cost" style='display:inline'></p></div>
							 
							
							<br/>
                            
							<div class="form-group validsimpleglass" id="glass_simple_div" style="display: none;"> 
								<label for="glass_simple">Choose Glass (Simple):</label>
								<select class="form-control" name="glass_simple" id="glass_simple" required data-error="Please Select Simple Glass">
									<option value="">--- Select simple glass ---</option>
								</select>
								<div class="input-group-icon" style="height: auto !important;bottom: 0 !important;top: auto !important;"><i class="fa-solid fa-gear"></i></div>
								<div class="help-block with-errors"></div>
							</div>
							  
							  <div class="form-group validtriplexglass" id="glass_triplex_div" style="display: none;">
								<label for="glass_triplex">Choose Glass (Triplex):</label>
                                <select class="form-control" name="glass_triplex" id="glass_triplex" required data-error="Please Select Triplex Glass">
                                  <option value="">--- Select triplex glass ---</option>
                                </select>
								<div class="input-group-icon" style="height: auto !important;bottom: 0 !important;top: auto !important;"><i class="fa-solid fa-gear"></i></div>
                                <div class="help-block with-errors"></div>
                              </div>
							  
								
								<hr>
								
								<h4>PANEL DIMENSIONS SECTION</h4>
							  
							  <div><h4 style='display:inline'>Current Panel Default Dimensions: </h4><p class="steptitle" id="current_panel_dimension" style='display:inline'></p></div>
							  
                              <div class="form-group validpaneldimensions" style="margin: 0 0 5px !important;">
                                <select class="form-control" name="panel_dimensions" id="panel_dimensions">
                                  <option value="">--- Select different dimension ---</option>
                                </select>
								<div class="input-group-icon"><i class="fa-solid fa-gear"></i></div>
                                <div class="help-block with-errors"></div>
                              </div>
							  <div id="panelExtraCost" style="display:none;font-weight: bold;text-align: right;">0</div>
							  
							  <hr>
								<div id="glass_motiv_section" style="display:none">
									<h4>GLASS MOTIV SECTION</h4>
																  
									  <div class="form-group validglassmotiv">
										<select class="form-control" name="glass_motiv" id="glass_motiv">
										  <option value="">--- Select glass motiv ---</option>
										</select>
										<div class="input-group-icon"><i class="fa-solid fa-gear"></i></div>
										<div class="help-block with-errors"></div>
									  </div>
									  <hr>
								</div>

							  
							  
							  
							  <h4>PANEL COLOR SECTION</h4>
								<form>
									<label>
										<input type="radio" name="panelColorOutInOption" value="1" checked> Panel color out only
									</label>
									<label>
										<input type="radio" name="panelColorOutInOption" value="2"> Panel color out & in
									</label>
								</form>
			
                              <div class="form-group validcolor" style="padding-top:20px;margin: 0 0 5px !important;">
								<label for="panel_color">Choose panel color (out):</label>
                                <select class="form-control" name="panel_color" id="panel_color" required data-error="Please Select panel color">
                                  <option value="">--- Select Color ---</option>
                                </select>
								<div class="input-group-icon" style="height: auto !important;bottom: 0 !important;top: auto !important;"><i class="fa-solid fa-gear"></i></div>
                                <div class="help-block with-errors"></div>
                              </div>
							  <div id="panelColorOutCost" style="display:block;font-weight: bold;text-align: right;"></div>
							  
							  <div class="form-group validcolor" id="subColorDiv">
								<label for="subColor">Choose panel sub color (out):</label>
                                <select class="form-control" name="subColor" id="subColor" data-error="Please Select panel sub color">
                                  <option value="">--- Select Color ---</option>
                                </select>
								<div class="input-group-icon" style="height: auto !important;bottom: 0 !important;top: auto !important;"><i class="fa-solid fa-gear"></i></div>
                                <div class="help-block with-errors"></div>
                              </div>
							  
							  <div class="form-group validcolor" id="subNoColorDiv" style="display:none">
								<label for="subNoColor">Provide panel sub color :</label>
                                <div class="form-group validsubnocolor">
                                <input class="form-control" name="subNoColor" id="subNoColor" type="text" placeholder="panel sub color" data-error="Please enter panel sub color">
                                <div class="input-group-icon"><i class="fa-solid fa-gear"></i></div>
                                <div class="help-block with-errors"></div>
								</div>
                              </div>
							  <hr>
							  
							  <div id="panelColorInDiv" style="display:none">
								
								<div class="form-group validcolor" style="margin: 0 0 5px !important;">
									<label for="panel_color_in">Choose panel color (in):</label>
									<select class="form-control" name="panel_color_in" id="panel_color_in" required data-error="Please Select panel color">
									  <option value="">--- Select Color ---</option>
									</select>
									<div class="input-group-icon" style="height: auto !important;bottom: 0 !important;top: auto !important;"><i class="fa-solid fa-gear"></i></div>
									<div class="help-block with-errors"></div>
								</div>
								<div id="panelColorInCost" style="display:block;font-weight: bold;text-align: right;"></div>
							  
							  
								<div class="form-group validcolor" id="subColorInDiv">
									<label for="subColorIn">Choose panel sub color (in):</label>
									<select class="form-control" name="subColorIn" id="subColorIn" data-error="Please Select panel sub color">
									  <option value="">--- Select Color ---</option>
									</select>
									<div class="input-group-icon" style="height: auto !important;bottom: 0 !important;top: auto !important;"><i class="fa-solid fa-gear"></i></div>
									<div class="help-block with-errors"></div>
								</div>
								
								<div class="form-group validcolor" id="subNoColorInDiv" style="display:none">
									<label for="subNoColorIn">Provide panel sub color :</label>
									<div class="form-group validsubnocolorin">
										<input class="form-control" name="subNoColorIn" id="subNoColorIn" type="text" placeholder="panel sub color" data-error="Please enter panel sub color">
										<div class="input-group-icon"><i class="fa-solid fa-gear"></i></div>
										<div class="help-block with-errors"></div>
									</div>
								</div>
							  
							  </div>
							  
							  <hr>
							  
							  <h4>PANEL WIDTH SECTION</h4>
							  
                              <div class="form-group validpanelwidth" style="margin: 0 0 5px !important;">
								<label for="panelWidth">Choose panel width :</label>
                                <select class="form-control" name="panelWidth" id="panelWidth" required data-error="Please Select panel width">
                                  <option value="">--- Select Width ---</option>
                                </select>
								<div class="input-group-icon" style="height: auto !important;bottom: 0 !important;top: auto !important;"><i class="fa-solid fa-gear"></i></div>
                                <div class="help-block with-errors"></div>
                              </div>
							  
							  <div id="panelWidthCost" style="font-weight: bold;text-align: right;"></div>
							  
							  <hr>
							  
							  <h4>Select Panel Cut:</h4>
							  <div class="form-group validcut" style="margin: 0 0 5px !important;">
                                <ul class="mgsstyle-checkbox mgscheckbox-style list-unstyled" style="margin-bottom: 0 !important;">
                                  <li>
                                    <input name="panel_cut" id="panel_cut" value="YES" type="checkbox">
                                    <label for="panel_cut">YES</label>
                                  </li>
                                </ul>
                                <div class="help-block with-errors"></div>
                              </div>
							
							  <div class="form-group validcolor" id="panelCutDiv" style="display:none;margin: 0 0 5px !important;">
									<label for="panelCutDim">Provide dimension (mm) :</label>
									<div class="form-group validpanelcutdiv" style="margin: 0 0 5px !important;">
										<input class="form-control" name="panelCutDim" id="panelCutDim" type="text" placeholder="dimension (mm)" required data-error="Please enter panel cut text">
										<div class="input-group-icon"><i class="fa-solid fa-gear"></i></div>
										<div class="help-block with-errors"></div>
									</div>
								</div>
								
							  <div id="panelCutCost" style="display:none;font-weight: bold;text-align: right;">0</div>
							  
								<hr>
								
							  
							  <h4>Select Inox 316:</h4>
							  <div class="form-group validinox" style="margin: 0 0 5px !important;">
                                <ul class="mgsstyle-checkbox mgscheckbox-style list-unstyled" style="margin-bottom: 0 !important;">
                                  <li>
                                    <input name="inox_316" id="inox_316" value="YES" type="checkbox">
                                    <label for="inox_316">YES</label>
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
                                </span> Back</button> <button class="btn btn-custom float-end" type="button" onclick="nextStep3()">Next 
                                <span class="fa-solid fa-arrow-right">
                                </span></button>
                              </div>
                            </fieldset>
                          </div>
                          <div id="section-3" class="section slide-right">
                            <fieldset>
                              <h3 class="section-title" style="font-size: 1.25rem !important;">Step 3 of 5</h3>
                              <div class="progress">
                                <div class="progress-bar" style="width: 50%;">
                                  <div class="progress-bar-text">50% Complete</div>
                                </div>
                              </div>
                              <div class="form-layer-steps mgscmultisteptheme2 form-layer-tolal-steps-5">
                                <div class="form-layer-progress">
                                  <div class="form-layer-progress-line" style="width: 50%;"></div>
                                </div>
                                <div class="form-layer-step">
                                  <div class="form-layer-step-icon activestep">1</div>
                                  <p class="steptitle">Line/Model</p>
                                </div>
                                <div class="form-layer-step">
                                  <div class="form-layer-step-icon">2</div>
                                  <p class="steptitle">Configuration</p>
                                </div>
                                <div class="form-layer-step currentstep">
                                  <div class="form-layer-step-icon">3</div>
                                  <p class="steptitle">Customer</p>
                                </div>
                                <div class="form-layer-step">
                                  <div class="form-layer-step-icon">4</div>
                                  <p class="steptitle">Details</p>
                                </div>
                                <div class="form-layer-step">
                                  <div class="form-layer-step-icon"><i class="fas fa-check"></i></div>
                                  <p class="steptitle">Report</p>
                                </div>
                              </div>
							  <div class="help-block with-errors mandatory-error"></div>

                              <h4>Provide Customer Info:</h4>
							  <div class="form-group validfname">
                                <input class="form-control" name="fname" id="fname" type="text" placeholder="Customer First Name*" required data-error="Please enter First Name">
                                <div class="input-group-icon"><i class="fa-solid fa-user"></i></div>
                                <div class="help-block with-errors"></div>
                              </div>
                              <div class="form-group validlname">
                                <input class="form-control" name="lname" id="lname" type="text" placeholder="Customer Last Name*" required data-error="Please enter Last Name">
                                <div class="input-group-icon"><i class="fa-solid fa-user"></i></div>
                                <div class="help-block with-errors"></div>
                              </div>
                              <div class="form-group validaddress">
                                <input class="form-control" name="address" id="address" type="text" placeholder="Customer Address*" required data-error="Please enter address">
                                <div class="input-group-icon"><i class="fa-solid fa-location-dot"></i></div>
                                <div class="help-block with-errors"></div>
                              </div>
                              <div class="form-group validemail">
                                <input class="form-control" name="email" id="email" type="email" placeholder="Customer Email*" required data-error="Please enter valid email">
                                <div class="input-group-icon"><i class="fa-solid fa-envelope"></i></div>
                                <div class="help-block with-errors"></div>
                              </div>
                              <div class="form-group validphone">
                                <input class="form-control" name="phone" id="phone" type="text" placeholder="Customer Phone*" required data-error="Please enter valid phone">
                                <div class="input-group-icon"><i class="fa-solid fa-phone"></i></div>
                                <div class="help-block with-errors"></div>
                              </div>
                              <div class="form-group quoteForm-step-3"> <button class="btn btn-custom" type="button" onclick="previousStep2()">
                                <span class="fa-solid fa-arrow-left">
                                </span> Back</button> <button id="nextStepFour" class="btn btn-custom float-end" type="button" onclick="nextStep4()">Next 
                                <span class="fa-solid fa-arrow-right">
                                </span></button>
                              </div>
                            </fieldset>
                          </div>
                          <div id="section-4" class="section slide-right">
                            <fieldset>
                              <h3 class="section-title" style="font-size: 1.25rem !important;">Step 4 of 5</h3>
                              <div class="progress">
                                <div class="progress-bar" style="width: 75%;">
                                  <div class="progress-bar-text">75% Complete</div>
                                </div>
                              </div>
                              <div class="form-layer-steps mgscmultisteptheme2 form-layer-tolal-steps-5">
                                <div class="form-layer-progress">
                                  <div class="form-layer-progress-line" style="width: 70%;"></div>
                                </div>
                                <div class="form-layer-step">
                                  <div class="form-layer-step-icon activestep">1</div>
                                  <p class="steptitle">Line/Model</p>
                                </div>
                                <div class="form-layer-step">
                                  <div class="form-layer-step-icon">2</div>
                                  <p class="steptitle">Configuration</p>
                                </div>
                                <div class="form-layer-step">
                                  <div class="form-layer-step-icon">3</div>
                                  <p class="steptitle">Customer</p>
                                </div>
                                <div class="form-layer-step currentstep">
                                  <div class="form-layer-step-icon">4</div>
                                  <p class="steptitle">Details</p>
                                </div>
                                <div class="form-layer-step">
                                  <div class="form-layer-step-icon"><i class="fas fa-check"></i></div>
                                  <p class="steptitle">Report</p>
                                </div>
                              </div>
                              <div class="help-block with-errors mandatory-error"></div>

						
							  <div class="form-group validquantity">
							  <label for="vat">Provide Quantity:</label>
                                <input class="form-control" name="quantity" id="quantity" type="text" placeholder="Quantity*" required data-error="Please enter valid quantity">
                                <div class="input-group-icon" style="height: auto !important;bottom: 0 !important;top: auto !important;"><i class="fa-solid fa-bars"></i></div>
                                <div class="help-block with-errors"></div>
                              </div>
							  
							  <div class="form-group validvat">
								<label for="vat">Choose Vat:</label>
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
								<label for="vat">Provide Discount (%):</label>
                                <input class="form-control" name="discount" id="discount" type="text" placeholder="Discount (%)" data-error="Please enter valid discount percentage">
                                <div class="input-group-icon" style="height: auto !important;bottom: 0 !important;top: auto !important;"><i class="fa-solid fa-bars"></i></div>
                                <div class="help-block with-errors"></div>
                              </div>
							  
                              <h4>Provide Additional Info:</h4>
                              <div class="form-group">
                                <textarea rows="3" name="additionalinfo" id="additionalinfo" placeholder="Provide Additional Info(optional)" class="form-control" data-error="Provide Additional Info">
								</textarea>
                                <div class="input-group-icon"><i class="fa-solid fa-info"></i></div>
                                <div class="help-block with-errors"></div>
                              </div>
                              
                              <div class="form-group quoteForm-step-4"> <button class="btn btn-custom" type="button" onclick="previousStep3()">
                                <span class="fa-solid fa-arrow-left">
                                </span> Back</button> <button class="btn btn-custom float-end" type="button" onclick="nextStep5()">Next 
                                <span class="fa-solid fa-arrow-right">
                                </span></button>
                              </div>
                            </fieldset>
                          </div>
                          <div id="section-5" class="section review-submit-section slide-right">
                            <fieldset>
                              <h3 class="section-title" style="font-size: 1.25rem !important;">Step 5 of 5: Review &amp; Submit</h3>
                              <div class="progress">
                                <div class="progress-bar" style="width: 100%;">
                                  <div class="progress-bar-text">100% Complete</div>
                                </div>
                              </div>
                              <div class="form-layer-steps mgscmultisteptheme2 form-layer-tolal-steps-5">
                                <div class="form-layer-progress">
                                  <div class="form-layer-progress-line" style="width: 100%;"></div>
                                </div>
                               <div class="form-layer-step">
                                  <div class="form-layer-step-icon activestep">1</div>
                                  <p class="steptitle">Line/Model</p>
                                </div>
                                <div class="form-layer-step">
                                  <div class="form-layer-step-icon">2</div>
                                  <p class="steptitle">Configuration</p>
                                </div>
                                <div class="form-layer-step">
                                  <div class="form-layer-step-icon">3</div>
                                  <p class="steptitle">Customer</p>
                                </div>
                                <div class="form-layer-step">
                                  <div class="form-layer-step-icon">4</div>
                                  <p class="steptitle">Details</p>
                                </div>
                                <div class="form-layer-step currentstep">
                                  <div class="form-layer-step-icon"><i class="fas fa-check"></i></div>
                                  <p class="steptitle">Report</p>
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
								<h4>Verpan Aluminium Panel Offer - <script>document.write(today);</script></h4>
                              <div class="row">
                                <div class="column col-md-6 col-sm-12">
								<h4>Customer Info</h4>
                                  <div class="section-info-box">
                                    <p id="firstNameData" style="margin-bottom: 0.4rem !important;"></p>
                                    <p id="lastNameData" style="margin-bottom: 0.4rem !important;"></p>
                                    <p id="addressData" style="margin-bottom: 0.4rem !important;"></p>
                                    <p id="emailaddressData" style="margin-bottom: 0.4rem !important;"></p>
                                    <p id="phoneData" style="margin-bottom: 0.4rem !important;"></p>
                                  </div>

                                  <h4>Panel Configuration</h4>
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
                                  <h4>Offer Details</h4>
                                  <div class="section-info-box">
                                    <p id="quantityData" style="margin-bottom: 0.4rem !important;"></p>
									<p id="panelCostData" style="margin-bottom: 0.4rem !important;"><strong>Panel cost:</strong></p>
									<p id="panelExtraCostData" style="margin-bottom: 0.4rem !important;"><strong>Panel extra cost:</strong></p>
									<p id="panelColorOutCostData" style="margin-bottom: 0.4rem !important;"><strong>Panel color out cost:</strong></p>
									<p id="panelColorInCostData" style="margin-bottom: 0.4rem !important;"><strong>Panel color in cost:</strong></p>
									<p id="panelWidthCostData" style="margin-bottom: 0.4rem !important;"><strong>Panel width cost:</strong></p>
									<p id="panelGlassCostData" style="margin-bottom: 0.4rem !important;"><strong>Panel glass cost:</strong></p>
									<p id="panelTriplexCostData" style="margin-bottom: 0.4rem !important;"><strong>Panel triplex cost:</strong></p>
									<p id="panelCutCostData" style="margin-bottom: 0.4rem !important;"><strong>Panel cut cost:</strong></p>
									<p id="panelInoxCostData" style="margin-bottom: 0.4rem !important;"><strong>Panel inox cost:</strong></p>
									
									<hr>
									
									<p id="totalCostData" style="margin-bottom: 0.4rem !important;"><strong>Total cost:</strong></p>
									<p id="vat_cost" style="margin-bottom: 0.4rem !important;"><strong>VAT(%) cost:</strong></p>
									<p id="final_cost" style="margin-bottom: 0.4rem !important;"><strong>Final cost:</strong></p>
									
									<hr>
									
                                    <p id="requirementdetailsData" style="margin-bottom: 0.4rem !important;"></p>
                                    <p id="additionalinfoData" style="margin-bottom: 0.4rem !important;"></p>
                                    <p id="preferedcontactData" style="margin-bottom: 0.4rem !important;"></p>
                                  </div>
									<h4>Signature</h4>
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
                                  <p id="AggreData"><strong>Agree with <a href="javascript:void(0)">Terms &amp; Conditions</a>:</strong> 
                                    <input name="aggre2" id="aggre2" value="1" checked disabled type="checkbox">
                                  </p>
                                  <div id="mgsContactSubmit" class="hidden"></div>
                                  <div id="loading-image" style="display:none;"> <img src="images/loading-image.gif" alt="Processing" /></div>
                                  <div id="final-step-buttons" class="form-group quoteForm-step-5"> <button class="btn btn-custom" type="button" onclick="previousStep4()">
                                    <span class="fa-solid fa-arrow-left">
                                    </span> Back</button> <button id="Submit" class="btn btn-custom float-end" type="submit">Submit </button>
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