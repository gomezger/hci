jQuery("#simulation")
  .on("click", ".s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 .click", function(event, data) {
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
                    "target": "screens/8780a20b-6b1a-4cda-bbba-4147c5dcd468"
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
    } else if(jFirer.is("#s-raised_Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-raised_Button_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#2274E1",
                        "box-shadow": "0px 5px 15px 0px #999999"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-raised_Button_3": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-raised_Button_3": {
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
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-raised_Button_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#4B96EC",
                        "box-shadow": "0px 2px 5px 0px #999999"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-raised_Button_3": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-raised_Button_3": {
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/7a789a78-17c1-4f4f-8a0a-d3fed750a97b"
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
    } else if(jFirer.is("#s-raised_Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-raised_Button_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#2274E1",
                        "box-shadow": "0px 5px 15px 0px #999999"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-raised_Button_4": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-raised_Button_4": {
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
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-raised_Button_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#4B96EC",
                        "box-shadow": "0px 2px 5px 0px #999999"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-raised_Button_4": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-raised_Button_4": {
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8780a20b-6b1a-4cda-bbba-4147c5dcd468"
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
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_1": {
                      "attributes": {
                        "line-height": "19px",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_1 span": {
                      "attributes": {
                        "color": "#000000",
                        "font-size": "10.0pt"
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
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_4": {
                      "attributes": {
                        "line-height": "15px",
                        "font-size": "8.0pt"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_4 span": {
                      "attributes": {
                        "color": "rgba(0,0,0,0.0)",
                        "font-size": "8.0pt"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_2": {
                      "attributes": {
                        "line-height": "15px",
                        "font-size": "8.0pt"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_2 span": {
                      "attributes": {
                        "color": "rgba(0,0,0,0.0)",
                        "font-size": "8.0pt"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_6": {
                      "attributes": {
                        "line-height": "15px",
                        "font-size": "8.0pt"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_6 span": {
                      "attributes": {
                        "color": "rgba(0,0,0,0.0)",
                        "font-size": "8.0pt"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_3": {
                      "attributes": {
                        "line-height": "15px",
                        "font-size": "8.0pt"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_3 span": {
                      "attributes": {
                        "color": "rgba(0,0,0,0.0)",
                        "font-size": "8.0pt"
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_2": {
                      "attributes": {
                        "line-height": "19px",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_2 span": {
                      "attributes": {
                        "color": "#000000",
                        "font-size": "10.0pt"
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
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_4": {
                      "attributes": {
                        "line-height": "15px",
                        "font-size": "8.0pt"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_4 span": {
                      "attributes": {
                        "color": "rgba(0,0,0,0.0)",
                        "font-size": "8.0pt"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_6": {
                      "attributes": {
                        "line-height": "15px",
                        "font-size": "8.0pt"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_6 span": {
                      "attributes": {
                        "color": "rgba(0,0,0,0.0)",
                        "font-size": "8.0pt"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_3": {
                      "attributes": {
                        "line-height": "15px",
                        "font-size": "8.0pt"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_3 span": {
                      "attributes": {
                        "color": "rgba(0,0,0,0.0)",
                        "font-size": "8.0pt"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_1": {
                      "attributes": {
                        "line-height": "15px",
                        "font-size": "8.0pt"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_1 span": {
                      "attributes": {
                        "color": "rgba(0,0,0,0.0)",
                        "font-size": "8.0pt"
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_3": {
                      "attributes": {
                        "line-height": "19px",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_3 span": {
                      "attributes": {
                        "color": "#000000",
                        "font-size": "10.0pt"
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
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_4": {
                      "attributes": {
                        "line-height": "15px",
                        "font-size": "8.0pt"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_4 span": {
                      "attributes": {
                        "color": "rgba(0,0,0,0.0)",
                        "font-size": "8.0pt"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_2": {
                      "attributes": {
                        "line-height": "15px",
                        "font-size": "8.0pt"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_2 span": {
                      "attributes": {
                        "color": "rgba(0,0,0,0.0)",
                        "font-size": "8.0pt"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_6": {
                      "attributes": {
                        "line-height": "15px",
                        "font-size": "8.0pt"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_6 span": {
                      "attributes": {
                        "color": "rgba(0,0,0,0.0)",
                        "font-size": "8.0pt"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_1": {
                      "attributes": {
                        "line-height": "15px",
                        "font-size": "8.0pt"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_1 span": {
                      "attributes": {
                        "color": "rgba(0,0,0,0.0)",
                        "font-size": "8.0pt"
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_4": {
                      "attributes": {
                        "line-height": "19px",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_4 span": {
                      "attributes": {
                        "color": "#000000",
                        "font-size": "10.0pt"
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
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_2": {
                      "attributes": {
                        "line-height": "15px",
                        "font-size": "8.0pt"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_2 span": {
                      "attributes": {
                        "color": "rgba(0,0,0,0.0)",
                        "font-size": "8.0pt"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_6": {
                      "attributes": {
                        "line-height": "15px",
                        "font-size": "8.0pt"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_6 span": {
                      "attributes": {
                        "color": "rgba(0,0,0,0.0)",
                        "font-size": "8.0pt"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_3": {
                      "attributes": {
                        "line-height": "15px",
                        "font-size": "8.0pt"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_3 span": {
                      "attributes": {
                        "color": "rgba(0,0,0,0.0)",
                        "font-size": "8.0pt"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_1": {
                      "attributes": {
                        "line-height": "15px",
                        "font-size": "8.0pt"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_1 span": {
                      "attributes": {
                        "color": "rgba(0,0,0,0.0)",
                        "font-size": "8.0pt"
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_6": {
                      "attributes": {
                        "line-height": "19px",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_6 span": {
                      "attributes": {
                        "color": "#000000",
                        "font-size": "10.0pt"
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
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_4": {
                      "attributes": {
                        "line-height": "15px",
                        "font-size": "8.0pt"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_4 span": {
                      "attributes": {
                        "color": "rgba(0,0,0,0.0)",
                        "font-size": "8.0pt"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_2": {
                      "attributes": {
                        "line-height": "15px",
                        "font-size": "8.0pt"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_2 span": {
                      "attributes": {
                        "color": "rgba(0,0,0,0.0)",
                        "font-size": "8.0pt"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_3": {
                      "attributes": {
                        "line-height": "15px",
                        "font-size": "8.0pt"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_3 span": {
                      "attributes": {
                        "color": "rgba(0,0,0,0.0)",
                        "font-size": "8.0pt"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_1": {
                      "attributes": {
                        "line-height": "15px",
                        "font-size": "8.0pt"
                      }
                    }
                  },{
                    "#s-5dfe60db-98d2-491f-b1c8-de0fc5b01ed3 #s-Button_1 span": {
                      "attributes": {
                        "color": "rgba(0,0,0,0.0)",
                        "font-size": "8.0pt"
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
  });