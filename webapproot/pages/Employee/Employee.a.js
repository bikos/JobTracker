dojo.declare("Employee", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
_end: 0
});

Employee.widgets = {
employeeLiveVariable1: ["wm.LiveVariable", {"type":"com.jobtrackerdb.data.Employee"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.jobtrackerdb.data.Employee","view":[
{"caption":"EmployeeId","sortable":true,"dataIndex":"employeeId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"EmployeeFname","sortable":true,"dataIndex":"employeeFname","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"EmployeeLname","sortable":true,"dataIndex":"employeeLname","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"EmployeePhone","sortable":true,"dataIndex":"employeePhone","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"EmployeeAddress","sortable":true,"dataIndex":"employeeAddress","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null}
]}, {}]
}],
navigationCall1: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Main\"","targetProperty":"pageName"}, {}]
}]
}]
}],
employeeDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"210px","height":"210px","title":"employee","width":"500px"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
employeeLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"140px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"jobtrackerDBLivePanel.popupLiveFormSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"employeeDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
employeeIdEditor1: ["wm.Number", {"caption":"EmployeeId","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"employeeId","height":"26px","required":true,"width":"100%"}, {}],
employeeFnameEditor1: ["wm.Text", {"caption":"EmployeeFname","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"employeeFname","height":"26px","maxChars":25,"required":true,"width":"100%"}, {}],
employeeLnameEditor1: ["wm.Text", {"caption":"EmployeeLname","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"employeeLname","height":"26px","maxChars":25,"required":true,"width":"100%"}, {}],
employeePhoneEditor1: ["wm.Number", {"caption":"EmployeePhone","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"employeePhone","height":"26px","required":true,"width":"100%"}, {}],
employeeAddressEditor1: ["wm.Text", {"caption":"EmployeeAddress","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"employeeAddress","height":"26px","required":true,"width":"100%"}, {}]
}]
}],
buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#333333","desktopHeight":"33px","height":"33px"}, {}, {
employeeSaveButton: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"employeeLiveForm1.saveDataIfValid"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"employeeLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
employeeCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"employeeDialog.hide","onclick1":"employeeLiveForm1.cancelEdit"}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
jobtrackerDBLivePanel: ["wm.LivePanel", {"autoScroll":false,"borderColor":"#FBFBFB","horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"employeeDialog","targetId":null,"targetProperty":"dialog"}, {}],
wire1: ["wm.Wire", {"source":"employeeLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
wire2: ["wm.Wire", {"source":"employeeDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
wire3: ["wm.Wire", {"source":"employeeSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
}],
employeeDojoGrid: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"employeeId","title":"EmployeeId","width":"80%","align":"center","formatFunc":"","mobileColumn":false},
{"show":true,"field":"employeeFname","title":"First Name","width":"100%","align":"center","formatFunc":"","mobileColumn":false},
{"show":true,"field":"employeeLname","title":"Last Name","width":"100%","align":"center","formatFunc":"","mobileColumn":false},
{"show":true,"field":"employeePhone","title":"Phone Number","width":"80%","align":"center","formatFunc":"","mobileColumn":false},
{"show":true,"field":"employeeAddress","title":"Address","width":"100%","align":"center","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"EmployeeId: \" + ${employeeId} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"First Name: \" + ${employeeFname}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Last Name: \" + ${employeeLname}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Phone Number: \" + ${employeePhone}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Address: \" + ${employeeAddress}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.jobtrackerdb.data.Employee","height":"100%","margin":"4","minDesktopHeight":60}, {"onCellDblClick":"jobtrackerDBLivePanel.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"employeeLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
employeeGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
button1: ["wm.Button", {"caption":"Back","imageIndex":3,"imageList":"app.silkIconList","margin":"4","styles":{}}, {"onclick":"navigationCall1"}],
employeeNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"jobtrackerDBLivePanel.popupLivePanelInsert"}],
employeeUpdateButton: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"jobtrackerDBLivePanel.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"employeeDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
employeeDeleteButton: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"employeeLiveForm1.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"employeeDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
};

Employee.prototype._cssText = '';
Employee.prototype._htmlText = '';