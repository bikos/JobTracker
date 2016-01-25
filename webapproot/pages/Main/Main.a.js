dojo.declare("Main", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
button1Click1: function(inSender) {
},
jobDojoGridJobCompletedTimeFormat: function( inValue, rowId, cellId, cellField, cellObj, rowObj) {
},
button5Click: function(inSender) {
this.pnlFilters.clearData();
},
_end: 0
});

Main.widgets = {
imageList1: ["wm.ImageList", {}, {}],
serviceVariable1: ["wm.ServiceVariable", {"autoUpdate":true,"operation":"getJobTypeById","service":"jobtrackerDB","startUpdate":true}, {}, {
input: ["wm.ServiceInput", {"type":"getJobTypeByIdInputs"}, {}]
}],
jobLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"operation":"","startUpdate":false,"type":"com.jobtrackerdb.data.Job"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.jobtrackerdb.data.Job","related":["jobType","paper","machine","employee"],"view":[
{"caption":"JobId","sortable":true,"dataIndex":"jobId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"JobNumber","sortable":true,"dataIndex":"jobNumber","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"JobSections","sortable":true,"dataIndex":"jobSections","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"JobCompletedTime","sortable":true,"dataIndex":"jobCompletedTime","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Status","sortable":true,"dataIndex":"status","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"Pages","sortable":true,"dataIndex":"pages","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"JobWeek","sortable":true,"dataIndex":"jobWeek","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"CartNumber","sortable":true,"dataIndex":"cartNumber","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},
{"caption":"JobName","sortable":true,"dataIndex":"jobName","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null}
]}, {}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"text1.dataValue","targetProperty":"sourceData.jobId"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"employeeLookup1.selectedItem","targetProperty":"sourceData.employee"}, {}]
}]
}],
jobLiveVariable2: ["wm.LiveVariable", {"type":"com.jobtrackerdb.data.Job"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.jobtrackerdb.data.Job","related":["jobType","paper","machine","employee"],"view":[
{"caption":"JobId","sortable":true,"dataIndex":"jobId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"JobNumber","sortable":true,"dataIndex":"jobNumber","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"JobSections","sortable":true,"dataIndex":"jobSections","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"JobCompletedTime","sortable":true,"dataIndex":"jobCompletedTime","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Status","sortable":true,"dataIndex":"status","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"Pages","sortable":true,"dataIndex":"pages","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"JobWeek","sortable":true,"dataIndex":"jobWeek","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"CartNumber","sortable":true,"dataIndex":"cartNumber","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},
{"caption":"JobName","sortable":true,"dataIndex":"jobName","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null}
]}, {}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"text1.dataValue","targetProperty":"filter.jobId"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"employeeLookup1.liveVariable","targetProperty":"filter.employee"}, {}]
}]
}],
navigationCall1: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Employee\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navigationCall2: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Job_Type\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navigationCall3: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Machine\"","targetProperty":"pageName"}, {}]
}]
}]
}],
navigationCall4: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Paper\"","targetProperty":"pageName"}, {}]
}]
}]
}],
jobLiveVariable3: ["wm.LiveVariable", {"type":"com.jobtrackerdb.data.Job"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.jobtrackerdb.data.Job","related":["jobType","paper","machine","employee"],"view":[
{"caption":"JobId","sortable":true,"dataIndex":"jobId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"JobNumber","sortable":true,"dataIndex":"jobNumber","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"JobSections","sortable":true,"dataIndex":"jobSections","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"JobCompletedTime","sortable":true,"dataIndex":"jobCompletedTime","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Status","sortable":true,"dataIndex":"status","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"Pages","sortable":true,"dataIndex":"pages","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"JobWeek","sortable":true,"dataIndex":"jobWeek","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"CartNumber","sortable":true,"dataIndex":"cartNumber","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},
{"caption":"JobName","sortable":true,"dataIndex":"jobName","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null}
]}, {}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"text1.dataValue","targetProperty":"filter.jobId"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"text2.dataValue","targetProperty":"filter.employee.employeeFname"}, {}]
}]
}],
navigationCall5: ["wm.NavigationCall", {"operation":"gotoHomePage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoHomePageInputs"}, {}]
}],
navigationCall6: ["wm.NavigationCall", {"operation":"gotoHomePage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoHomePageInputs"}, {}]
}],
navMain: ["wm.NavigationCall", {"operation":"gotoHomePage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoHomePageInputs"}, {}]
}],
jobLiveVariable4: ["wm.LiveVariable", {"type":"com.jobtrackerdb.data.Job"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.jobtrackerdb.data.Job","related":["jobType","paper","machine","employee"],"view":[
{"caption":"JobId","sortable":true,"dataIndex":"jobId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"JobNumber","sortable":true,"dataIndex":"jobNumber","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"JobSections","sortable":true,"dataIndex":"jobSections","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"JobCompletedTime","sortable":true,"dataIndex":"jobCompletedTime","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Status","sortable":true,"dataIndex":"status","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"Pages","sortable":true,"dataIndex":"pages","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null},
{"caption":"JobWeek","sortable":true,"dataIndex":"jobWeek","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},
{"caption":"CartNumber","sortable":true,"dataIndex":"cartNumber","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":7,"subType":null},
{"caption":"JobName","sortable":true,"dataIndex":"jobName","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":8,"subType":null}
]}, {}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"text1.dataValue","targetProperty":"filter.jobId"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"text2.dataValue","targetProperty":"filter.employee.employeeFname"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"text3.dataValue","targetProperty":"filter.employee.employeeId"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"text4.dataValue","targetProperty":"filter.jobType.jobTypeName"}, {}],
wire4: ["wm.Wire", {"expression":undefined,"source":"text3.dataValue","targetProperty":"filter.machine.machineId"}, {}]
}]
}],
jobDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"410px","height":"410px","title":"job","width":"500px"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
jobLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"340px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"jobtrackerDBLivePanel.popupLiveFormSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"jobDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
jobIdEditor1: ["wm.Number", {"borderColor":"#333333","caption":"JobId","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"jobId","height":"26px","required":true,"width":"100%"}, {}],
jobNumberEditor1: ["wm.Number", {"borderColor":"#333333","caption":"JobNumber","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"jobNumber","height":"26px","required":true,"width":"100%"}, {}],
jobSectionsEditor1: ["wm.Number", {"borderColor":"#333333","caption":"JobSections","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"jobSections","height":"26px","required":true,"width":"100%"}, {}],
jobCompletedTimeEditor1: ["wm.DateTime", {"borderColor":"#333333","caption":"JobCompletedTime","captionSize":"140px","desktopHeight":"26px","emptyValue":"zero","formField":"jobCompletedTime","height":"26px","required":true,"width":"100%"}, {}],
statusEditor1: ["wm.Text", {"caption":"Status","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"status","height":"26px","maxChars":40,"required":true,"width":"100%"}, {}],
pagesEditor1: ["wm.Number", {"caption":"Pages","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"pages","height":"26px","required":true,"width":"100%"}, {}],
jobWeekEditor1: ["wm.Number", {"caption":"JobWeek","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"jobWeek","height":"26px","required":true,"width":"100%"}, {}],
cartNumberEditor1: ["wm.Number", {"caption":"CartNumber","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"cartNumber","height":"26px","required":true,"width":"100%"}, {}],
jobNameEditor1: ["wm.Text", {"caption":"JobName","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"jobName","height":"26px","maxChars":30,"required":true,"width":"100%"}, {}],
jobTypeLookup1: ["wm.Lookup", {"caption":"JobType","captionSize":"140px","dataType":"com.jobtrackerdb.data.JobType","displayField":"jobTypeName","formField":"jobType","required":true,"width":"100%"}, {}],
paperLookup1: ["wm.Lookup", {"caption":"Paper","captionSize":"140px","dataType":"com.jobtrackerdb.data.Paper","displayField":"paperName","formField":"paper","required":true,"width":"100%"}, {}],
machineLookup1: ["wm.Lookup", {"caption":"Machine","captionSize":"140px","dataType":"com.jobtrackerdb.data.Machine","displayField":"machineId","formField":"machine","required":true,"width":"100%"}, {}],
employeeLookup1: ["wm.Lookup", {"caption":"Employee","captionSize":"140px","dataType":"com.jobtrackerdb.data.Employee","displayField":"employeeFname","formField":"employee","required":true,"width":"100%"}, {}]
}]
}],
buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#333333","desktopHeight":"33px","height":"33px"}, {}, {
jobSaveButton: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"jobLiveForm1.saveDataIfValid"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"jobLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
jobCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"jobDialog.hide","onclick1":"jobLiveForm1.cancelEdit"}]
}]
}],
layoutBox1: ["wm.Layout", {"border":"2","horizontalAlign":"right","styles":{},"verticalAlign":"top"}, {}, {
panel1: ["wm.HeaderContentPanel", {"borderColor":"#892424","height":"124px","horizontalAlign":"center","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
picture1: ["wm.Picture", {"source":"resources/images/logo.png","styles":{},"width":"561px"}, {}]
}],
panel2: ["wm.MainContentPanel", {"border":"3","borderColor":"#3095ae","height":"50px","horizontalAlign":"center","layoutKind":"left-to-right","styles":{"backgroundColor":"#b8dae7","fontWeight":"bold","color":"#413a3a","fontSize":"15px"},"verticalAlign":"middle","width":"100%"}, {}, {
label1: ["wm.Label", {"caption":"Job Tracker Digital Press","height":"35px","padding":"4","styles":{"fontSize":"21px","color":"#6f2525"},"width":"307px"}, {}]
}],
panel3: ["wm.Panel", {"height":"418px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
jobtrackerDBLivePanel: ["wm.LivePanel", {"autoScroll":false,"borderColor":"#FBFBFB","horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"jobDialog","targetId":null,"targetProperty":"dialog"}, {}],
wire1: ["wm.Wire", {"source":"jobLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
wire2: ["wm.Wire", {"source":"jobDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
wire3: ["wm.Wire", {"source":"jobSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
}],
jobDojoGrid: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"JobId: \" + ${jobId} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"JobNumber: \" + ${jobNumber}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"JobSections: \" + ${jobSections}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"JobCompletedTime: \" + ${wm.runtimeId}.formatCell(\"jobCompletedTime\", ${jobCompletedTime}, ${this}, ${wm.rowId})\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Status: \" + ${status}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Pages: \" + ${pages}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"JobWeek: \" + ${jobWeek}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"CartNumber: \" + ${cartNumber}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"JobName: \" + ${jobName}\n + \"</div>\"\n\n","mobileColumn":false},
{"show":true,"field":"jobId","title":"JobId","width":"80px","displayType":"Number","align":"right","formatFunc":""},
{"show":true,"field":"jobNumber","title":"JobNumber","width":"80px","displayType":"Number","align":"right","formatFunc":""},
{"show":true,"field":"jobSections","title":"JobSections","width":"80px","displayType":"Number","align":"right","formatFunc":""},
{"show":true,"field":"jobCompletedTime","title":"JobCompletedTime","width":"80px","displayType":"Date","align":"left","formatFunc":"wm_date_formatter"},
{"show":true,"field":"status","title":"Status","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"pages","title":"Pages","width":"80px","displayType":"Number","align":"right","formatFunc":""},
{"show":true,"field":"jobWeek","title":"JobWeek","width":"80px","displayType":"Number","align":"right","formatFunc":""},
{"show":true,"field":"cartNumber","title":"CartNumber","width":"80px","displayType":"Number","align":"right","formatFunc":""},
{"show":true,"field":"jobName","title":"JobName","width":"100%","displayType":"Text","align":"left","formatFunc":""}
],"dsType":"com.jobtrackerdb.data.Job","height":"100%","localizationStructure":{},"margin":"4","minDesktopHeight":60,"styles":{}}, {"onCellDblClick":"jobtrackerDBLivePanel.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"jobLiveVariable4","targetProperty":"dataSet"}, {}]
}]
}],
jobGridButtonPanel: ["wm.Panel", {"desktopHeight":"34px","enableTouchHeight":true,"height":"34px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
button5: ["wm.Button", {"caption":"Reload","margin":"4"}, {"onclick":"button5Click"}],
panel16: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}],
jobNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"jobtrackerDBLivePanel.popupLivePanelInsert"}],
jobUpdateButton: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"jobtrackerDBLivePanel.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"jobDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
jobDeleteButton: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"jobLiveForm1.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"jobDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}],
pnlFilters: ["wm.Panel", {"height":"70px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
panel6: ["wm.Panel", {"height":"100%","horizontalAlign":"center","styles":{"color":"#186854","fontSize":"8px"},"verticalAlign":"middle","width":"77px"}, {}, {
label2: ["wm.Label", {"caption":"Search","padding":"4","styles":{"fontSize":"17px","fontWeight":"bold","textDecoration":"blink"},"width":"72px"}, {}]
}],
panel7: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"middle","width":"307px"}, {}, {
text1: ["wm.Text", {"caption":"JobID","dataValue":undefined,"displayValue":"","styles":{"backgroundColor":"#97e4eb","fontSize":"12px","color":"#234025"}}, {}]
}],
panel18: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"middle","width":"305px"}, {}, {
text2: ["wm.Text", {"caption":"Employee","displayValue":"","styles":{"backgroundColor":"#52d0dc","fontSize":"12px","color":"#203625"}}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"jobLiveVariable1.employee.employeeFname","targetProperty":"dataValue"}, {}]
}]
}]
}],
panel8: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"middle","width":"311px"}, {}, {
text3: ["wm.Text", {"caption":"Machine ID","dataValue":undefined,"displayValue":"","styles":{"backgroundColor":"#21bddc"}}, {}]
}],
panel9: ["wm.Panel", {"height":"71px","horizontalAlign":"center","styles":{},"verticalAlign":"middle","width":"308px"}, {}, {
text4: ["wm.Text", {"caption":"Job Type","dataValue":undefined,"displayValue":"","styles":{"backgroundColor":"#00b5cd"}}, {}]
}]
}],
panel5: ["wm.Panel", {"border":"3","borderColor":"#389962","height":"82px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundColor":"#a0c9d2"},"verticalAlign":"middle","width":"100%"}, {}, {
panel10: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"middle","width":"96px"}, {}, {
label3: ["wm.Label", {"caption":"Update","padding":"4","styles":{"fontSize":"20px","fontWeight":"bold","color":"#eee2e2"}}, {}]
}],
panel11: ["wm.Panel", {"height":"100%","horizontalAlign":"center","styles":{},"verticalAlign":"middle","width":"213px"}, {}, {
button1: ["wm.Button", {"caption":"Update Employee","margin":"4","styles":{},"width":"150px"}, {"onclick":"navigationCall1"}]
}],
panel12: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"middle","width":"198px"}, {}, {
button2: ["wm.Button", {"caption":"Update Job Type","margin":"4","styles":{},"width":"141px"}, {"onclick":"navigationCall2"}]
}],
panel13: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"middle","width":"229px"}, {}, {
button3: ["wm.Button", {"caption":"Update Machine","margin":"4","styles":{},"width":"141px"}, {"onclick":"navigationCall3"}]
}],
panel14: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"middle","width":"239px"}, {}, {
button4: ["wm.Button", {"caption":"Update Paper","margin":"4","styles":{},"width":"148px"}, {"onclick":"navigationCall4"}]
}]
}]
}]
};

Main.prototype._cssText = '';
Main.prototype._htmlText = '';