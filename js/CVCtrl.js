angular.module('project', ['ngSanitize'])

.controller('CVCtrl', function ($scope) {
    $scope.tab_fr = {

        langue : {
            fr : "Français",
            en : "Anglais",
            title : "Langue"
        },

        cartouche : {
            titre : "Étudiant et développeur Java/Web",
            CV : " CV"
        },

        /* Experience pro */
        experience_pro : {
            title : "Expériences professionnelles",
            nav_title : "Expériences<br>professionnelles",

            dev_web_title : "DEVELOPPEUR WEB",
            dev_web_date : "2013 - En cours",
            dev_web_note : "Junior Entreprise – Junior MIAGE Concept – Biot, France",
            dev_web_description : "Développement de sites web avec modules Javascript/PHP pour des clients de Junior MIAGE Concept.",

            dev_java1_title : "DEVELOPPEUR JAVA",
            dev_java1_date : "Mai - Août 2013",
            dev_java1_note : "Stage - Convers Télémarketing - Nice, France",
            dev_java1_description : "Conception et développement du programme de gestion des ressources humaines pour l'entreprise en Java (MVC).<br>Utilisation de technologies de bases de données comme SQL et JDBC.<br>Conception et développements de programmes annexes en Java tel qu'un Look And Feel configurable.",

            dev_java2_title : "DEVELOPPEUR JAVA",
            dev_java2_date : "Avril - Juillet 2012",
            dev_java2_note : "Stage - Convers Télémarketing - Nice, France",
            dev_java2_description : "Conception et développement de programmes internes Java (MVC).<br>Développement de composants graphiques et modules Java et intégration dans tous les logiciels existants de l'entreprise.<br>Utilisation de IReport couplé avec JasperReport.<br>Utilisation de technologies de bases de données comme SQL et JDBC."
        },

        /* Formations et certifications */
        forma_certif : {
            title : "FORMATIONS & Certificationss",
            nav_title : "FORMATIONS &<br>Certifications",

            master1_miage_title : "Étudiant en 1ère année de Master MIAGE",
            master1_miage_date : "Septembre 2014 -<br>En cours",
            master1_miage_note : "Université de Nice Sophia Antipolis",

            licence_miage_title : "Licence MIAGE",
            licence_miage_date : "2013",
            licence_miage_note : "Université de Nice Sophia Antipolis - <i>Major de promotion</i>",

            dut_title : "DUT informatique",
            dut_date : "2012",
            dut_note : "IUT Nice-Sophia Antipolis",

            cisco_title : "Certification Cisco CCNA 1",
            cisco_date : "2011",

            voltaire_title : "Certification Projet Voltaire",
            voltaire_date : "2011",

            bac_title : "Bac S spécialité physique",
            bac_date : "2010",
            bac_note : "Lycée du Parc Impérial - Nice, France - mention AB",
        },
        
        /* Compétences */

        comp : {
            title : "Compétences",
            nav_title : "Compétences",

            lang_prog : "Langages de programmation",

            conception_gdp : "Conception & gestion de projet",
        
            patrons : "Patrons de conception",
            test_u : "Tests unitaires"
        },

        /* Travaux et projets */
        
        trav_pro : {
            title : "Travaux et projets",
            nav_title : "Travaux et projets",

            run_title : "Application mobile pour l'analyse de performances sportives",
            run_description : "Application mobile développée en HTML5, utilisant le framework PhoneGap/Cordova afin de produire une application multiplateforme Android et iOS pour le suivi et l'analyse de performance sportives (courses à pieds, séances d'entrainement, vélo ...).",

            miage_title : "Site de la formation MIAGE de Nice-Sophia Antipolis",
            miage_description : "Site de la MIAGE de Nice-Sophia Antipolis avec modules Javascript/Jquery/PHP liés aux inscriptions et stages.",
        
            voyance_title : "Site de voyance en ligne",
            voyance_description : "ite de voyance avec modules Javascript/Jquery interactifs liés à la voyance."
        },

        /* Contact */
        contact : {
            title : "Me contacter",
            nav_title : "Me contacter",

            nom : "Votre nom",
            email : "Votre email",
            sujet : "Sujet",
            message : "Votre message ici ...",
            envoyer : " Envoyer"
        },

        haut : {
            title : "Haut"
        }
    };

    /*   Tableau avec les traductions en anglais  */
    $scope.tab_en = {

         langue : {
            fr : "French",
            en : "English",
            title : "Language"
        },

        cartouche : {
            titre : "Student and Java/Web developper",
            CV : " Resume"
        },

        /* Experience pro */
        experience_pro : {
            title : "Expériences professionnelles",
            nav_title : "Expériences<br>professionnelles",

            dev_web_title : "DEVELOPPEUR WEB",
            dev_web_date : "2013 - En cours",
            dev_web_note : "Junior Entreprise – Junior MIAGE Concept – Biot, France",
            dev_web_description : "Développement de sites web avec modules Javascript/PHP pour des clients de Junior MIAGE Concept.",

            dev_java1_title : "DEVELOPPEUR JAVA",
            dev_java1_date : "Mai - Août 2013",
            dev_java1_note : "Stage - Convers Télémarketing - Nice, France",
            dev_java1_description : "Conception et développement du programme de gestion des ressources humaines pour l'entreprise en Java (MVC).<br>Utilisation de technologies de bases de données comme SQL et JDBC.<br>Conception et développements de programmes annexes en Java tel qu'un Look And Feel configurable.",

            dev_java2_title : "DEVELOPPEUR JAVA",
            dev_java2_date : "Avril - Juillet 2012",
            dev_java2_note : "Stage - Convers Télémarketing - Nice, France",
            dev_java2_description : "Conception et développement de programmes internes Java (MVC).<br>Développement de composants graphiques et modules Java et intégration dans tous les logiciels existants de l'entreprise.<br>Utilisation de IReport couplé avec JasperReport.<br>Utilisation de technologies de bases de données comme SQL et JDBC."
        },

        /* Formations et certifications */
        forma_certif : {
            title : "FORMATIONS & Certificationss",
            nav_title : "FORMATIONS &<br>Certifications",

            master1_miage_title : "Étudiant en 1ère année de Master MIAGE",
            master1_miage_date : "Septembre 2014 -<br>En cours",
            master1_miage_note : "Université de Nice Sophia Antipolis",

            licence_miage_title : "Licence MIAGE",
            licence_miage_date : "2013",
            licence_miage_note : "Université de Nice Sophia Antipolis - <i>Major de promotion</i>",

            dut_title : "DUT informatique",
            dut_date : "2012",
            dut_note : "IUT Nice-Sophia Antipolis",

            cisco_title : "Certification Cisco CCNA 1",
            cisco_date : "2011",

            voltaire_title : "Certification Projet Voltaire",
            voltaire_date : "2011",

            bac_title : "Bac S spécialité physique",
            bac_date : "2010",
            bac_note : "Lycée du Parc Impérial - Nice, France - mention AB",
        },
        
        /* Compétences */

        comp : {
            title : "Compétences",
            nav_title : "Compétences",

            lang_prog : "Langages de programmation",

            conception_gdp : "Conception & gestion de projet",
        
            patrons : "Patrons de conception",
            test_u : "Tests unitaires"
        },

        /* Travaux et projets */
        
        trav_pro : {
            title : "Travaux et projets",
            nav_title : "Travaux et projets",

            run_title : "Application mobile pour l'analyse de performances sportives",
            run_description : "Application mobile développée en HTML5, utilisant le framework PhoneGap/Cordova afin de produire une application multiplateforme Android et iOS pour le suivi et l'analyse de performance sportives (courses à pieds, séances d'entrainement, vélo ...).",

            miage_title : "Site de la formation MIAGE de Nice-Sophia Antipolis",
            miage_description : "Site de la MIAGE de Nice-Sophia Antipolis avec modules Javascript/Jquery/PHP liés aux inscriptions et stages.",
        
            voyance_title : "Site de voyance en ligne",
            voyance_description : "ite de voyance avec modules Javascript/Jquery interactifs liés à la voyance."
        },

        /* Contact */
        contact : {
            title : "Me contacter",
            nav_title : "Me contacter",

            nom : "Votre nom",
            email : "Votre email",
            sujet : "Sujet",
            message : "Votre message ici ...",
            envoyer : " Envoyer"
        },

        haut : {
            title : "Haut"
        }
        
    };
     

    $scope.langueFr = function() {
        $scope.tab_lang = $scope.tab_fr;
    }

    $scope.langueEn = function() {
        $scope.tab_lang = $scope.tab_en;
    }

    $scope.tab_lang = $scope.tab_fr;
});

