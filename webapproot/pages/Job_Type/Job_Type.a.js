dojo.declare("Job_Type", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
_end: 0
});

Job_Type.widgets = {
jobtypeLiveVariable1: ["wm.LiveVariable", {"type":"com.jobtrackerdb.data.JobType"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.jobtrackerdb.data.JobType","view":[
{"caption":"JobTypeId","sortable":true,"dataIndex":"jobTypeId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"JobTypeName","sortable":true,"dataIndex":"jobTypeName","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}
]}, {}]
}],
navigationCall1: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Main\"","targetProperty":"pageName"}, {}]
}]
}]
}],
jobtypeDialog: ["wm.DesignableDialog", {"height":"132px","title":"jobtype","width":"500px","containerWidgetId":"containerWidget","buttonBarId":"buttonBar"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
jobtypeLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"62px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"jobtrackerDBLivePanel.popupLiveFormSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"jobtypeDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
jobTypeIdEditor1: ["wm.Number", {"caption":"JobTypeId","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"jobTypeId","height":"26px","required":true,"width":"100%"}, {}],
jobTypeNameEditor1: ["wm.Text", {"caption":"JobTypeName","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"jobTypeName","height":"26px","maxChars":30,"required":true,"width":"100%"}, {}]
}]
}],
buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#333333","height":"33px"}, {}, {
jobtypeSaveButton: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"jobtypeLiveForm1.saveDataIfValid"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"jobtypeLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
jobtypeCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"jobtypeDialog.hide","onclick1":"jobtypeLiveForm1.cancelEdit"}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
jobtrackerDBLivePanel: ["wm.LivePanel", {"autoScroll":false,"borderColor":"#FBFBFB","horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"jobtypeDialog","targetId":null,"targetProperty":"dialog"}, {}],
wire1: ["wm.Wire", {"source":"jobtypeLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
wire2: ["wm.Wire", {"source":"jobtypeDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
wire3: ["wm.Wire", {"source":"jobtypeSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
}],
jobtypeDojoGrid: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"jobTypeId","title":"JobTypeId","width":"80px","displayType":"Number","align":"right","formatFunc":""},
{"show":true,"field":"jobTypeName","title":"JobTypeName","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"JobTypeId: \" + ${jobTypeId} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"JobTypeName: \" + ${jobTypeName}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.jobtrackerdb.data.JobType","height":"100%","margin":"4"}, {"onCellDblClick":"jobtrackerDBLivePanel.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"jobtypeLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
jobtypeGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
button1: ["wm.Button", {"caption":"Back","imageIndex":3,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"navigationCall1"}],
jobtypeNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"jobtrackerDBLivePanel.popupLivePanelInsert"}],
jobtypeUpdateButton: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"jobtrackerDBLivePanel.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"jobtypeDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
jobtypeDeleteButton: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"jobtypeLiveForm1.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"jobtypeDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
};

Job_Type.prototype._cssText = '';
Job_Type.prototype._htmlText = '';