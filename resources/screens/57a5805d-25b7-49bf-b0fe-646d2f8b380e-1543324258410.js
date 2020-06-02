jQuery("#simulation")
  .on("click", ".s-57a5805d-25b7-49bf-b0fe-646d2f8b380e .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Triangle")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/3bfa0370-b220-4e55-b963-25c2774919d8"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-raised_Button")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreater",
                "parameter": [ {
                  "action": "jimCount",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_1",
                    "property": "jimGetValue"
                  } ]
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-57a5805d-25b7-49bf-b0fe-646d2f8b380e #s-Input_1 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "0px",
                        "border-top-style": "solid",
                        "border-top-color": "#C8C8C8",
                        "border-right-width": "0px",
                        "border-right-style": "solid",
                        "border-right-color": "#C8C8C8",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#C8C8C8",
                        "border-left-width": "0px",
                        "border-left-style": "solid",
                        "border-left-color": "#C8C8C8"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "action": "jimCount",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_1",
                    "property": "jimGetValue"
                  } ]
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Asunto_Foro" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-57a5805d-25b7-49bf-b0fe-646d2f8b380e #s-Input_1 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FF0000",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FF0000",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FF0000",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FF0000"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "action": "jimCount",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_1",
                    "property": "jimGetValue"
                  } ]
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_1" ],
                    "value": {
                      "datatype": "variable",
                      "element": "Asunto_Foro"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "action": "jimCount",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_1",
                    "property": "jimGetValue"
                  } ]
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-nuevo" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "action": "jimCount",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_1",
                    "property": "jimGetValue"
                  } ]
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_1" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNotEquals",
                "parameter": [ {
                  "action": "jimCount",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_1",
                    "property": "jimGetValue"
                  } ]
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_2" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-raised_Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-57a5805d-25b7-49bf-b0fe-646d2f8b380e #s-raised_Button_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#2274E1",
                        "box-shadow": "0px 5px 15px 0px #999999"
                      }
                    }
                  },{
                    "#s-57a5805d-25b7-49bf-b0fe-646d2f8b380e #s-raised_Button_1": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-57a5805d-25b7-49bf-b0fe-646d2f8b380e #s-raised_Button_1": {
                      "attributes-ie": {
                        "-pie-background": "#2274E1",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-57a5805d-25b7-49bf-b0fe-646d2f8b380e #s-raised_Button_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#4B96EC",
                        "box-shadow": "0px 2px 5px 0px #999999"
                      }
                    }
                  },{
                    "#s-57a5805d-25b7-49bf-b0fe-646d2f8b380e #s-raised_Button_1": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-57a5805d-25b7-49bf-b0fe-646d2f8b380e #s-raised_Button_1": {
                      "attributes-ie": {
                        "-pie-background": "#4B96EC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_36")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8851aac6-2f13-4ded-929d-866691bad8c9"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-57a5805d-25b7-49bf-b0fe-646d2f8b380e .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_1" ],
                    "value": {
                      "datatype": "variable",
                      "element": "Asunto_Foro"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_1" ],
                    "value": {
                      "datatype": "variable",
                      "element": "Asunto_Foro"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageunload", ".s-57a5805d-25b7-49bf-b0fe-646d2f8b380e .pageunload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Asunto_Foro" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });