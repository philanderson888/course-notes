## PHP

## Add Permanent Yes/No Click Button To Personal Website

Morning-routine-content.php

    Create item on page with panelName and databaseFieldName

    Initialise

        $databaseFieldName=$queryDate['databaseFieldName'];

Script.js

    function fnTodayInitialisePanelVisibleStatus(){ 

        Get back initial AJAX data to set up the page elements in their correct status 
        (ie read database fields for today)

        fnSetPanelState($('#panelName'),responseData.databaseFieldName);

    function fnTodayInitialiseButtonListeners(){

        fnInitialiseButtonListeners($('#panelSetGoalsDayBefore'));

Sql-initialize.php

    While found a row
        $databaseFieldName=$row['databaseFieldName'];

    $queryresult array set to 
        "$databaseFieldName"=>$databaseFieldName,

Sql-query-initial-data.php

    $reponse array : initialise to null

        "databaseFieldName"=>""

    $reponse array if record found 

        "databaseFieldName"=>$row['databaseFieldName'],

Function.php

    $databaseFieldName=$row['databaseFieldName'];

    "databaseFieldName"=>$databaseFieldName

## Adding AJAX text update every key stroke

1.  Add to database new field - type integer - name grams_protein_consumed

2.  Morning-routine-content.php

    *   Add in <span class="code">$grams_protein_consumed=$queryDate['grams_protein_consumed'];</span>

    *   Add in 

        <pre class="code"><div class="form-group">
            <label for="gramsProteinConsumed" class="col-sm-2 control-label">Grams Protein Consumed</label>
            <div class="col-sm-10">
                <input type="text" name="gramsProteinConsumed" id="gramsProteinConsumed" maxlength="5" class="form-control" value="<?php echo $grams_protein_consumed; ?>"/>
            </div>
        </div>
        </pre>

3.  Script.js

    <pre class="code">$( "#gramsProteinConsumed" ).keyup(function(){       /* On KEYUP update the database using AJAX */
        var grams_protein_consumed = $("#gramsProteinConsumed").val();  
        console.log('Grams Protein Consumed - ' + grams_protein_consumed);
        console.log(typeof(parseInt(grams_protein_consumed)));
        if(parseInt(grams_protein_consumed) > 99){
            $("#gramsProteinConsumedParent").removeClass('has-danger'); 
            $("#gramsProteinConsumedParent").addClass('has-success');   
            console.log('Setting the class to success');
        }
        else{
            $("#gramsProteinConsumedParent").removeClass('has-success');    
            $("#gramsProteinConsumedParent").addClass('has-danger');    
            console.log('Setting the class to failure');
        }
        var databaseField = 'grams_protein_consumed';
        var databaseValue = grams_protein_consumed;
        ajaxUpdateDatabase(databaseField,databaseValue);
    });

    or simple version

    function fnTextChangeListeners(){  

    $("#databasefieldname").keyup(function(){
        ajaxUpdateDatabase('databasefieldname',$('#databasefieldname').val());
    });

    </pre>

4.  function.php

    <pre class="code">
    function queryDate($con,$givenDate){  

        while($row=mysqli_fetch_array($result)){

                $databasefieldname=$row['databasefieldname'];

                $queryResult=[

                    "databasefieldname"=>$databasefieldname         
    </pre>