Machine.widgets = {
	machineLiveVariable1: ["wm.LiveVariable", {"type":"com.jobtrackerdb.data.Machine"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.jobtrackerdb.data.Machine","view":[
{"caption":"MachineId","sortable":true,"dataIndex":"machineId","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"MachineName","sortable":true,"dataIndex":"machineName","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"StartCount","sortable":true,"dataIndex":"startCount","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"EndCount","sortable":true,"dataIndex":"endCount","type":"java.lang.Integer","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"HoursRun","sortable":true,"dataIndex":"hoursRun","type":"java.lang.Float","displayType":"Number","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null},
{"caption":"Issue","sortable":true,"dataIndex":"issue","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":5,"subType":null}
]}, {}]
	}],
	navigationCall1: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Main\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	machineDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"236px","height":"236px","title":"machine","width":"500px"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			machineLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"166px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"jobtrackerDBLivePanel.popupLiveFormSuccess"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"machineDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
				}],
				machineIdEditor1: ["wm.Text", {"caption":"MachineId","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"machineId","height":"26px","maxChars":5,"required":true,"width":"100%"}, {}],
				machineNameEditor1: ["wm.Text", {"caption":"MachineName","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"machineName","height":"26px","maxChars":10,"required":true,"width":"100%"}, {}],
				startCountEditor1: ["wm.Number", {"caption":"StartCount","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"startCount","height":"26px","width":"100%"}, {}],
				endCountEditor1: ["wm.Number", {"caption":"EndCount","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"endCount","height":"26px","width":"100%"}, {}],
				hoursRunEditor1: ["wm.Number", {"caption":"HoursRun","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"hoursRun","height":"26px","width":"100%"}, {}],
				issueEditor1: ["wm.Text", {"caption":"Issue","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"issue","height":"26px","width":"100%"}, {}]
			}]
		}],
		buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#333333","desktopHeight":"33px","height":"33px"}, {}, {
			machineSaveButton: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"machineLiveForm1.saveDataIfValid"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"source":"machineLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
				}]
			}],
			machineCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"machineDialog.hide","onclick1":"machineLiveForm1.cancelEdit"}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		jobtrackerDBLivePanel: ["wm.LivePanel", {"autoScroll":false,"borderColor":"#FBFBFB","horizontalAlign":"left","verticalAlign":"top"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"source":"machineDialog","targetId":null,"targetProperty":"dialog"}, {}],
				wire1: ["wm.Wire", {"source":"machineLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
				wire2: ["wm.Wire", {"source":"machineDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
				wire3: ["wm.Wire", {"source":"machineSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
			}],
			machineDojoGrid: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"machineId","title":"MachineId","width":"100%","align":"center","formatFunc":"","mobileColumn":false},
{"show":true,"field":"machineName","title":"MachineName","width":"100%","align":"center","formatFunc":"","mobileColumn":false},
{"show":true,"field":"startCount","title":"StartCount","width":"80px","align":"center","formatFunc":"","mobileColumn":false},
{"show":true,"field":"endCount","title":"EndCount","width":"80px","align":"center","formatFunc":"","mobileColumn":false},
{"show":true,"field":"hoursRun","title":"HoursRun","width":"80px","align":"center","formatFunc":"","mobileColumn":false},
{"show":true,"field":"issue","title":"Issue","width":"100%","align":"center","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"MachineId: \" + ${machineId} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"MachineName: \" + ${machineName}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"StartCount: \" + ${startCount}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"EndCount: \" + ${endCount}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"HoursRun: \" + ${hoursRun}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Issue: \" + ${issue}\n + \"</div>\"\n\n","mobileColumn":false}
],"dsType":"com.jobtrackerdb.data.Machine","height":"100%","margin":"4","minDesktopHeight":60}, {"onCellDblClick":"jobtrackerDBLivePanel.popupLivePanelEdit"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"machineLiveVariable1","targetProperty":"dataSet"}, {}]
				}]
			}],
			machineGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
				button1: ["wm.Button", {"caption":"Back","imageIndex":3,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"navigationCall1"}],
				machineNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"jobtrackerDBLivePanel.popupLivePanelInsert"}],
				machineUpdateButton: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"jobtrackerDBLivePanel.popupLivePanelEdit"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"source":"machineDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
					}]
				}],
				machineDeleteButton: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"machineLiveForm1.deleteData"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"source":"machineDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
					}]
				}]
			}]
		}]
	}]
}