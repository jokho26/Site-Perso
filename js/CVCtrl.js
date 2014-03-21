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
            CV : "CV",

            toggle_menu : "Afficher/masquer le menu",
            dl_cv : "Télécharger mon CV",
            contact : "Me contacter"
        },

        /* Experience pro */
        experience_pro : {
            title : "Expériences professionnelles",
            nav_title : "Expériences<br>professionnelles",

            dev_web_title : "Développeur Web",
            dev_web_date : "2013 - En cours",
            dev_web_note : "Junior Entreprise – Junior MIAGE Concept – Biot, France",
            dev_web_description : "Développement de sites web avec modules Javascript/PHP pour des clients de Junior MIAGE Concept.",

            dev_java1_title : "Développeur Java",
            dev_java1_date : "Mai - Août 2013",
            dev_java1_note : "Stage - Convers Télémarketing - Nice, France",
            dev_java1_description : "Conception et développement du programme de gestion des ressources humaines pour l'entreprise en Java (MVC).<br>Utilisation de technologies de bases de données comme SQL et JDBC.<br>Conception et développements de programmes annexes en Java tel qu'un Look And Feel configurable.",

            dev_java2_title : "Développeur Java",
            dev_java2_date : "Avril - Juillet 2012",
            dev_java2_note : "Stage - Convers Télémarketing - Nice, France",
            dev_java2_description : "Conception et développement du programme du back office en Java (MVC).<br>Développement de composants graphiques et modules Java et intégration dans tous les logiciels existants de l'entreprise.<br>Utilisation de IReport couplé avec JasperReport.<br>Utilisation de technologies de bases de données comme SQL et JDBC."
        },

        /* Formations et certifications */
        forma_certif : {
            title : "FORMATIONS & Certifications",
            nav_title : "FORMATIONS &<br>Certifications",

            master1_miage_title : "Étudiant en 1ère année de Master MIAGE",
            master1_miage_date : "Septembre 2014 -<br>En cours",
            master1_miage_note : "Université de Nice Sophia Antipolis",

            licence_miage_title : "Licence MIAGE",
            licence_miage_date : "2013",
            licence_miage_note : "Université de Nice Sophia Antipolis - <i>Major de promotion</i>",

            dut_title : "DUT informatique",
            dut_date : "2012",
            dut_note : "Université de Nice Sophia Antipolis",

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
            voyance_description : "Site de voyance avec modules Javascript/Jquery interactifs liés à la voyance."
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
            titre : "Student and Java/Web developer",
            CV : "Resume",

            toggle_menu : "Toggle the menu",
            dl_cv : "Download my resume",
            contact : "Contact"
        },

        /* Experience pro */
        experience_pro : {
            title : "Professional experience",
            nav_title : "Professional<br>experience",

            dev_web_title : "Web developer",
            dev_web_date : "2013 - Ongoing",
            dev_web_note : "Junior Entreprise – Junior MIAGE Concept – Biot, France",
            dev_web_description : "Website development with Javascript/PHP for Junior MIAGE Concept's clients.",

            dev_java1_title : "Java developer",
            dev_java1_date : "May - August 2013",
            dev_java1_note : "Intership - Convers Télémarketing - Nice, France",
            dev_java1_description : "Design and development of the program of human resources management for the company in Java (MVC).<br>Use of database technologies such as SQL and JDBC.<br>Design and development of side programs such as a Java Look And Feel.",

            dev_java2_title : "Java developper",
            dev_java2_date : "April - July 2012",
            dev_java2_note : "Internship - Convers Télémarketing - Nice, France",
            dev_java2_description : "Design and development of the program for back office in Java (MVC).<br>Development of Java graphical components and modules and integration into all the existing softwares of the company.<br>Use of IReport with JasperReport for reporting.<br>Use of database technologies such as SQL and JDBC."
        },

        /* Formations et certifications */
        forma_certif : {
            title : "Education & Certifications",
            nav_title : "Education &<br>Certifications",

            master1_miage_title : "1st year of a 2-year Master’s Degree program in MIAGE",
            master1_miage_date : "September 2014 -<br>Ongoing",
            master1_miage_note : "University of Nice Sophia Antipolis",

            licence_miage_title : "Licence in MIAGE (equivalent to a Bachelor’s Degree)",
            licence_miage_date : "2013",
            licence_miage_note : "University of Nice Sophia Antipolis - <i>Valedictorian</i>",

            dut_title : "DUT in Computer Science (2-year technical university degree)",
            dut_date : "2012",
            dut_note : "University of Nice Sophia Antipolis",

            cisco_title : "Cisco Certification CCNA 1",
            cisco_date : "2011",

            voltaire_title : "Projet Voltaire Certification",
            voltaire_date : "2011",

            bac_title : "Bac S (High School Degree) in Science",
            bac_date : "2010",
            bac_note : "Lycée Parc Impérial - Nice, France - with honors",
        },
        
        /* Compétences */

        comp : {
            title : "Relevant skills",
            nav_title : "Relevant skills",

            lang_prog : "Programming languages",

            conception_gdp : "Design & project managing",
        
            patrons : "Design pattern",
            test_u : "Unit testing"
        },

        /* Travaux et projets */
        
        trav_pro : {
            title : "Work and projects",
            nav_title : "Work and projects",

            run_title : "Mobile application for sport performance analysis",
            run_description : "Mobile application developed in HTML5, using the framework PhoneGap/Cordova to make a multiplatform application on Android and iOS for sport performance analysis (foot races, training sessions, bike ...).",

            miage_title : "MIAGE of Nice-Sophia Antipolis website",
            miage_description : "Website of MIAGE of Nice-Sophia Antipolis with Javascript/Jquery/PHP modules related to enrollment and training.",
        
            voyance_title : "Clairvoyance website",
            voyance_description : "Website about clairvoyance with Javascript/Jquery interactive modules related to clairvoyance."
        },

        /* Contact */
        contact : {
            title : "Contact",
            nav_title : "Contact",

            nom : "Your name",
            email : "Your email",
            sujet : "Subject",
            message : "Your message here ...",
            envoyer : " Send"
        },

        haut : {
            title : "Up"
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

