(function(window, undefined) {
  var dictionary = {
    "3b30d492-8dea-4c40-999e-a380798ff8a1": "Menu Calendario Noviembre",
    "e8e717ba-b479-41c8-a46e-3e41b93aba0f": "Menu Repositorio",
    "7a789a78-17c1-4f4f-8a0a-d3fed750a97b": "Menu de Materias 2",
    "8780a20b-6b1a-4cda-bbba-4147c5dcd468": "Menu de materias",
    "3bfa0370-b220-4e55-b963-25c2774919d8": "Menu Materia",
    "5dfe60db-98d2-491f-b1c8-de0fc5b01ed3": "Menu Agregar Materia",
    "3d6a1acb-e733-481e-ad6c-5b25c9764c64": "Menu Calendario Diciembre",
    "8851aac6-2f13-4ded-929d-866691bad8c9": "Principal",
    "11ebeee7-fea8-4ca8-b4b2-5678786a2496": "Menu Practicos",
    "aa93e3d6-80f5-400b-b305-9d7b09fb50c9": "Menu Login",
    "9c63d011-1786-40d5-b7f0-e3c8ebcc4497": "Menu Bienvenido",
    "57a5805d-25b7-49bf-b0fe-646d2f8b380e": "Menu Foro",
    "b090e723-df9c-4b4a-967b-04a8951f4103": "Template 1",
    "0f84e149-85a9-4cb2-a0c8-dd5b6f8c390d": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);