/*

360clm.js 

Version: 3.0

This file is to be used within HTML Bundles included in the 360 CLM application.

Copyright (c) 2011, 2012 All Right Reserved, 360 Vantage LLC http://360vantage.com

*/

/*

Used to invoke tracking of a specific event. Events are tracked if they are longer

than 

2 seconds. When you call this method any previously started events will

automatically be ended. 

moniker: This is the name of the event which usually identifies what page the user

is viewing

topic: This can be used to group events into a topic such as "Efficacy or Safety"

description: This can be used to provide even further detail of the event

*/

function startCLMEvent(moniker, topic, description) {

 var isSafari = navigator.userAgent.match( /(iPod|iPhone|iPad)/ );

 if (isSafari) {

 window.location = "clm:startEvent:" + moniker + ":" + topic + ":" + description;

 }

}

/* 

Used to open a PDF document that already exists in the downloaded content.

documentId: Salesforce ID of the Document

*/

function gotoPDF(documentId) {

 var isSafari = navigator.userAgent.match( /(iPod|iPhone|iPad)/ );

 if (isSafari) {

 window.location = "clm:gotoPDF:" + documentId;

 }

}

/* 

Used to open a PDF document that already exists in the downloaded content and 

navigate to a specific page number.

documentId: Salesforce ID of the Document

pageNumber: Page number within the document

*/ 

function gotoPDF(documentId, pageNumber) {

 var isSafari = navigator.userAgent.match( /(iPod|iPhone|iPad)/ );

 if (isSafari) {

 window.location = "clm:gotoPDF:" + documentId + ":page:" + pageNumber;

 }

}

/* 

Used to open a Video that already exists in the downloaded content.

videoId: Salesforce ID of the Video

*/ 

function openCLMVideo(videoId) {

 var isSafari = navigator.userAgent.match( /(iPod|iPhone|iPad)/ );

 if (isSafari) {

 window.location = "clm:openCLMVideo:" + videoId;

 }

}

/* 

Used to open a HTML Bundle that already exists in the downloaded content.

videoId: Salesforce ID of the Video

*/ 

function openCLMHTMLBundle(bundleId) {

 var isSafari = navigator.userAgent.match( /(iPod|iPhone|iPad)/ );

 if (isSafari) {

 window.location = "clm:openCLMHTMLBundle:" + bundleId;

 }

}