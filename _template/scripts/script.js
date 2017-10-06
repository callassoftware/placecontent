//-------------------------------------------------------------------------------------------------
// Main Javascript for the Place Content fixup template
//
//-------------------------------------------------------------------------------------------------
// Author: David van Driessche
// Copyright © 2017 - Four Pees
//-------------------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------------------
// cchipPrintLoop
//
// If present in a Javascript file referenced from the template HTML; pdfToolbox will call this
// function (the function with the exact name "cchipPrintLoop") automagically. If it is present,
// this function is responsible for outputting the PDF document that will be overlaid on the PDF
// document that is being processed.
//
// This function can refer to the cals_doc_info object to figure out information about the document
// being processed (such as the number of pages) and can use the cchip.printPages() function to
// generate PDF from the current state of the HTML template.
//-------------------------------------------------------------------------------------------------

function cchipPrintLoop() {

	// If you want to add dynamic HTML content to the document, you can get the "body" element. New
	// content can then be added to the body element
	var theBody = $( "body" );

	// Loop over all pages
	for( var thePageIndex = 0; thePageIndex < cals_doc_info.pages.length; thePageIndex++ ) {



		// Output to the current page
		cchip.printPages(1);
	}

}


























