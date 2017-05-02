angular.module('project', ['ngSanitize'])

.controller('CVCtrl', function ($scope) {
    $scope.tab_fr = {

        langue : {
            fr : "Français",
            en : "Anglais",
            title : "Langue"
        },

        cartouche : {
            titre : "Développeur web Java/PHP",
            CV : "CV",

            toggle_menu : "Afficher/masquer le menu",
            dl_cv : "Télécharger mon CV",
            contact : "Me contacter"
        },

        /* Experience pro */
        experience_pro : {
            title : "Expériences professionnelles",
            nav_title : "Expériences<br>professionnelles",

            // Sogeti
            sogeti_title : "Ingénieur étude et développement",
            sogeti_orange_date   : "Février 2016 à aujourd’hui",
            sogeti_orange_note   : "Sogeti High Tech pour Orange – Sophia Antipolis, France",
            sogeti_orange_description : "Analyse, conception, rédaction de spécifications techniques et fonctionnelles, de plans de tests, 	développement de solutions en PHP, Javascript, HTML et CSS dans une équipe Agile.<br>Responsable de la brique des tests Selenium/RobotFramework. Développement et mise en place de	logiciels internes en Java liés à l’outil Jenkins et  à l’environnement de tests. Mise en place des nouveaux 	outils et procédures de tests Selenium/RobotFramework et enrichissement de librairies Python.<br>Poste de Scrum Master pendant 6 mois.",

            sogeti_ifce_date   : "Octobre 2015 - Février 2016",
            sogeti_ifce_note   : "Sogeti High Tech pour l’Institut Français du Cheval et de l’Équitation – Sophia Antipolis, France ",
            sogeti_ifce_description : "Conception et développement d’un module de gestion de numérisation et de nettoyage de fiches 	signalétiques scannées avec Back End et Web Services en JEE et Front End en PHP (Framework Zend), 	HTML, Javascript, CSS et Bootstrap.",

            // Atos
            atos_title  : "Développeur Web",
            atos_date   : "Juillet 2014 - Septembre 2015",
            atos_note   : "Apprentissage - Atos Intégration – Sophia Antipolis, France",
            atos_description : "Recueil et analyse des besoins, rédaction d’un cahier des charges, conception et développement d’outils internes web PHP, HTML, Javascript, CSS et NatStar pour l’analyse de code et la capitalisation de connaissance.<br>Intervention au sein de la Tierce Maintenance Applicative Atos assignée au client RSI.",

            // JMC
            dev_web_title   : "Développeur Web",
            dev_web_date    : "2013 - 2015",
            dev_web_note    : "Junior Entreprise – Junior MIAGE Concept – Biot, France",
            dev_web_description : "Développement de sites web avec modules Javascript/PHP pour des clients de Junior MIAGE Concept.",

            //Convers
            dev_java1_title : "Développeur Java",
            dev_java1_date  : "Mai - Août 2013",
            dev_java1_note  : "Stage - Convers Télémarketing - Nice, France",
            dev_java1_description : "Conception et développement du programme de gestion des ressources humaines pour l'entreprise en Java (MVC).<br>Utilisation de technologies de bases de données comme SQL et JDBC.<br>Conception et développements de programmes annexes en Java tel qu'un Look And Feel configurable.",

            dev_java2_title : "Développeur Java",
            dev_java2_date  : "Avril - Juillet 2012",
            dev_java2_note  : "Stage - Convers Télémarketing - Nice, France",
            dev_java2_description : "Conception et développement du programme du back office en Java (MVC).<br>Développement de composants graphiques et modules Java et intégration dans tous les logiciels existants de l'entreprise.<br>Utilisation de IReport couplé avec JasperReport.<br>Utilisation de technologies de bases de données comme SQL et JDBC."
        },

        /* Formations et certifications */
        forma_certif : {
            title : "FORMATIONS & Certifications",
            nav_title : "FORMATIONS &<br>Certifications",

            mbds_title : "Master 2 MIAGE MBDS (Mobiquité, Base de données et intégration Systèmes)",
            mbds_date : "2015",
            mbds_note : "Université de Nice Sophia Antipolis",

            master1_miage_title : "Master 1 MIAGE",
            master1_miage_date : "2014",
            master1_miage_note : "Université de Nice Sophia Antipolis - <i>Major de promotion</i>",

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

            graphasc_title : "GraphASC",
            graphasc_description : "Outil Web interne destiné à la TMA Atos assigné au client RSI pour la facilitation des processus de développement internes et à la capitalisation de connaissance dans l'équipe de TMA.<br>Développé en respectant un modèle MVC, et utilisant les technologies HTML5, JavaScript/JQuery, CSS, PHP et SQL.<br>La fonctionnalité principale est la création de graphes de dépendance dynamiques construits à la volée avec la librairie JavaScript GoJS, pour une visualisation de l'architecture du projet NatStar du RSI. Les données sont extraites à partir de l’export texte de l’IDE NatStar, parsé dans une base de données avec un parseur PHP également développé dans le cadre du projet.",


            instamiam_title : "Instamiam",
            instamiam_description : "Projet Web étudiant d'hébergement de photos et intégration d'un système de réseau social (mur d'actualités, commentaires ...).<br>Réalisé avec les technologies : HTML5, JavaScript, AngularJs, JQuery, CSS, JEE, Ajax, SQL, EJB/SQL.<br><a href=\"http://slides.com/christianpavinich/presentation-instamiam#/\">Lien vers la présentation du projet</a>",


            run_title : "Application mobile pour l'analyse de performances sportive",
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
            titre : "Web developer Java/PHP",
            CV : "Resume",

            toggle_menu : "Toggle the menu",
            dl_cv : "Download my resume",
            contact : "Contact"
        },

        /* Experience pro */
        experience_pro : {
            title : "Professional experience",
            nav_title : "Professional<br>experience",

            // Sogeti
            sogeti_title : "Software development engineer",
            sogeti_orange_date   : "February 2016 - today",
            sogeti_orange_note   : "Sogeti High Tech for Orange – Sophia Antipolis, France",
            sogeti_orange_description : "Requirements analysis, design, technical and functional specifications, tests plan, PHP development, 	Javascript, HTML and CSS in an agile team.<br>Selenium/Robotframework tests component manager. Development and implementation of internal 	Java software using Jenkins and linked to the test environment. Implementation of new tools and 	procedures for Selenium/Robotframework testing and enrichment of Python’s libraries.<br>Scrum Master position for 6 months.",

            sogeti_ifce_date   : "October 2015, February 2016",
            sogeti_ifce_note   : "Sogeti High Tech for « l’Institut Français du Cheval et de l’Équitation »",
            sogeti_ifce_description : "Design and development of a module to manage digitized forms and cleaning identification sheets with a 	JEE’s Back End and Web Services and a Front End with PHP (Zend Framework), HTML, Javascript, CSS and Bootstrap.",


            // Atos
            atos_title : "Web developer",
            atos_date : "July 2014 - September 2015",
            atos_note : "Apprenticeship - Atos Intégration – Sophia Antipolis, France",
            atos_description : "Requirements analysis, specifications, design and development of internal web tools in PHP, HTML, Javascript, CSS and Natsar for code analysis and knowledge capitalization.<br>Intervention inside the Atos\’ Application Management Team for the RSI.",

            dev_web_title : "Web developer",
            dev_web_date : "2013 - Ongoing",
            dev_web_note : "Junior Entreprise – Junior MIAGE Concept – Biot, France",
            dev_web_description : "Website development with Javascript/PHP for Junior MIAGE Concept's clients.",

            dev_java1_title : "Java developer",
            dev_java1_date : "May - August 2013",
            dev_java1_note : "Intership - Convers Télémarketing - Nice, France",
            dev_java1_description : "Design and development of the human resources management for the company in Java (MVC).<br>Use of database technologies such as SQL and JDBC.<br>Design and development of side programs such as a Java Look And Feel.",

            dev_java2_title : "Java developper",
            dev_java2_date : "April - July 2012",
            dev_java2_note : "Internship - Convers Télémarketing - Nice, France",
            dev_java2_description : "Design and development of the back office program in Java (MVC).<br>Development of Java graphical components and modules and integration into all the existing softwares of the company.<br>Use of IReport with JasperReport for reporting.<br>Use of database technologies such as SQL and JDBC."
        },

        /* Formations et certifications */
        forma_certif : {
            title : "Education & Certifications",
            nav_title : "Education &<br>Certifications",

            mbds_title : "Master 2 Degree in MIAGE MBDS (Mobiquity, Databases and System Integration)",
            mbds_date : "2015",
            mbds_note : "University of Nice Sophia Antipolis",

            master1_miage_title : "Master 1 Degree in MIAGE",
            master1_miage_date : "2014",
            master1_miage_note : "University of Nice Sophia Antipolis - <i>Valedictorian</i>",

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

             graphasc_title : "GraphASC",
            graphasc_description : "Internal web application for the AMT Atos, assigned to the client RSI, to shorten development process and knowledge capitalization.<br>This application was developped with the MCS design pattern, in HTML5, JavaScript/JQuery, CSS, PHP and SQL.<br>The main functionnality is the creation of dynamicals dependencies graphs with the Javascript Library GoJS,  in order to display the architecture of the NatStar projet of the RSI. The data were extract from a text export with the IDE NatStar and parsed in the databases with a NatStar parser developped in PHP for the needs of the project.",

            instamiam_title : "Instamiam",
            instamiam_description : "Student web project of photo hosting and social network integration (news, commentaries ...).<br>Developped in HTML5, JavaScript, AngularJs, JQuery, CSS, JEE, Ajax, SQL, EJB/SQL.<br><a href=\"http://slides.com/christianpavinich/presentation-instamiam#/\">Link to the project's presentation</a>",


            run_title : "Mobile application for sport performance analysis",
            run_description : "Mobile application developed in HTML5, using the PhoneGap/Cordova framework to make a multiplatform application on Android and iOS for sport performance analysis (foot races, training sessions, bike ...).",

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

