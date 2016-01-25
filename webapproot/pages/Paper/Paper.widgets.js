Paper.widgets = {
	paperLiveVariable1: ["wm.LiveVariable", {"type":"com.jobtrackerdb.data.Paper"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.jobtrackerdb.data.Paper","view":[
{"caption":"PaperId","sortable":true,"dataIndex":"paperId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"PaperName","sortable":true,"dataIndex":"paperName","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"PaperDimension","sortable":true,"dataIndex":"paperDimension","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"PaperWeight","sortable":true,"dataIndex":"paperWeight","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null}
]}, {}]
	}],
	navigationCall1: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Main\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	paperDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"184px","height":"184px","title":"paper","width":"500px"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			paperLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"114px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"jobtrackerDBLivePanel.popupLiveFormSuccess"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"paperDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
				}],
				paperIdEditor1: ["wm.Number", {"caption":"PaperId","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"paperId","height":"26px","required":true,"width":"100%"}, {}],
				paperNameEditor1: ["wm.Text", {"caption":"PaperName","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"paperName","height":"26px","maxChars":30,"required":true,"width":"100%"}, {}],
				paperDimensionEditor1: ["wm.Text", {"caption":"PaperDimension","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"paperDimension","height":"26px","maxChars":10,"required":true,"width":"100%"}, {}],
				paperWeightEditor1: ["wm.Number", {"caption":"PaperWeight","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"paperWeight","height":"26px","required":true,"width":"100%"}, {}]
			}]
		}],
		buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#333333","desktopHeight":"33px","height":"33px"}, {}, {
			paperSaveButton: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"paperLiveForm1.saveDataIfValid"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"source":"paperLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
				}]
			}],
			paperCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"paperDialog.hide","onclick1":"paperLiveForm1.cancelEdit"}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		jobtrackerDBLivePanel: ["wm.LivePanel", {"autoScroll":false,"borderColor":"#FBFBFB","horizontalAlign":"left","verticalAlign":"top"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"source":"paperDialog","targetId":null,"targetProperty":"dialog"}, {}],
				wire1: ["wm.Wire", {"source":"paperLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
				wire2: ["wm.Wire", {"source":"paperDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
				wire3: ["wm.Wire", {"source":"paperSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
			}],
			paperDojoGrid: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"paperId","title":"PaperId","width":"80%","align":"center","formatFunc":"","mobileColumn":false},
{"show":true,"field":"paperName","title":"PaperName","width":"327%","align":"center","formatFunc":"","mobileColumn":false},
{"show":true,"field":"paperDimension","title":"PaperDimension","width":"100%","align":"center","formatFunc":"","mobileColumn":false},
{"show":true,"field":"paperWeight","title":"PaperWeight","width":"80px","align":"center","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"PaperId: \" + ${paperId} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"PaperName: \" + ${paperName}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"PaperDimension: \" + ${paperDimension}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"PaperWeight: \" + ${paperWeight}\n + \"</div>\"\n\n","mobileColumn":false}
],"dsType":"com.jobtrackerdb.data.Paper","height":"100%","margin":"4","minDesktopHeight":60}, {"onCellDblClick":"jobtrackerDBLivePanel.popupLivePanelEdit"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"paperLiveVariable1","targetProperty":"dataSet"}, {}]
				}]
			}],
			paperGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
				button1: ["wm.Button", {"caption":"Back","imageIndex":3,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"navigationCall1"}],
				paperNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"jobtrackerDBLivePanel.popupLivePanelInsert"}],
				paperUpdateButton: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"jobtrackerDBLivePanel.popupLivePanelEdit"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"source":"paperDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
					}]
				}],
				paperDeleteButton: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"paperLiveForm1.deleteData"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"source":"paperDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
					}]
				}]
			}]
		}]
	}]
}