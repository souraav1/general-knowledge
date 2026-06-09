const questions = [
    {
        "id": 1,
        "question": "When was Uttarakhand carved out of Uttar Pradesh to become a separate state?",
        "answer": "November 9, 2000."
    },
    {
        "id": 2,
        "question": "What are the official capitals of Uttarakhand?",
        "answer": "Dehradun (Winter) and Gairsain (Summer)."
    },
    {
        "id": 3,
        "question": "What is the total geographical area of Uttarakhand?",
        "answer": "53,483 sq. km."
    },
    {
        "id": 4,
        "question": "How many administrative districts does Uttarakhand have?",
        "answer": "13 districts (divided into Garhwal and Kumaon divisions)."
    },
    {
        "id": 5,
        "question": "Which is the largest district in Uttarakhand by area?",
        "answer": "Chamoli."
    },
    {
        "id": 6,
        "question": "Which is the smallest district in Uttarakhand by area?",
        "answer": "Champawat."
    },
    {
        "id": 7,
        "question": "Which Indian states share borders with Uttarakhand?",
        "answer": "Himachal Pradesh (North-West) and Uttar Pradesh (South)."
    },
    {
        "id": 8,
        "question": "Which international borders does the state share?",
        "answer": "Nepal (East) and Tibet/China (North)."
    },
    {
        "id": 9,
        "question": "Which is the highest mountain peak in Uttarakhand?",
        "answer": "Nanda Devi (7,816 meters)."
    },
    {
        "id": 10,
        "question": "At which exact place do the Bhagirathi and Alaknanda rivers meet to form the Ganga?",
        "answer": "Devprayag."
    },
    {
        "id": 11,
        "question": "Where does the Alaknanda River originate?",
        "answer": "Satopanth Glacier."
    },
    {
        "id": 12,
        "question": "Where does the Bhagirathi River originate?",
        "answer": "Gaumukh (Gangotri Glacier)."
    },
    {
        "id": 13,
        "question": "Which river forms the natural eastern boundary between Uttarakhand and Nepal?",
        "answer": "Sharda (Kali) River."
    },
    {
        "id": 14,
        "question": "Which river is primarily responsible for forming the Doon Valley?",
        "answer": "Song River (along with Asan and Suswa)."
    },
    {
        "id": 15,
        "question": "Which lake in Uttarakhand is famous as the \"Mystery Lake\" or \"Skeleton Lake\"?",
        "answer": "Roopkund Lake."
    },
    {
        "id": 16,
        "question": "Which district is known as the \"Lake District of India\"?",
        "answer": "Nainital."
    },
    {
        "id": 17,
        "question": "Which pass connects the Pithoragarh district with Tibet and is used for the Kailash Mansarovar Yatra?",
        "answer": "Lipulekh Pass."
    },
    {
        "id": 18,
        "question": "The Khatling Glacier is the origin place of which river?",
        "answer": "Bhilangana River."
    },
    {
        "id": 19,
        "question": "Which village on the Indo-Tibetan border is known as the \"First Village of India\" (formerly the last village)?",
        "answer": "Mana (Chamoli district)."
    },
    {
        "id": 20,
        "question": "On the confluence of which two rivers is the Tehri Dam built?",
        "answer": "Bhagirathi and Bhilangana."
    },
    {
        "id": 21,
        "question": "What is the State Animal of Uttarakhand?",
        "answer": "Alpine Musk Deer."
    },
    {
        "id": 22,
        "question": "What is the State Bird of Uttarakhand?",
        "answer": "Himalayan Monal."
    },
    {
        "id": 23,
        "question": "What is the State Flower of Uttarakhand?",
        "answer": "Brahma Kamal."
    },
    {
        "id": 24,
        "question": "What is the State Tree of Uttarakhand?",
        "answer": "Buransh (Rhododendron)."
    },
    {
        "id": 25,
        "question": "What is the official State Sport of Uttarakhand?",
        "answer": "Football."
    },
    {
        "id": 26,
        "question": "What is the official State Instrument?",
        "answer": "Dhol."
    },
    {
        "id": 27,
        "question": "What is the State Song of Uttarakhand?",
        "answer": "\"Uttarakhand Dev Bhoomi...\" (Written by Hemant Bisht)."
    },
    {
        "id": 28,
        "question": "What was the original name of the state before it was changed in 2007?",
        "answer": "Uttaranchal."
    },
    {
        "id": 29,
        "question": "Which two rivers are depicted on the state emblem of Uttarakhand?",
        "answer": "Ganga and Yamuna."
    },
    {
        "id": 30,
        "question": "When was Sanskrit declared the second official state language of Uttarakhand?",
        "answer": "2010."
    },
    {
        "id": 31,
        "question": "In the ancient Skanda Purana, what name is used to refer to the Garhwal region?",
        "answer": "Kedar Khand."
    },
    {
        "id": 32,
        "question": "In the Skanda Purana, what name is used to refer to the Kumaon region?",
        "answer": "Manas Khand."
    },
    {
        "id": 33,
        "question": "Who founded the Parmar (Paramara) dynasty of Garhwal around 888 CE?",
        "answer": "Kanakpal."
    },
    {
        "id": 34,
        "question": "Which ancient dynasty ruled from the Katyuri Valley (modern Baijnath) and built the Jageshwar temples?",
        "answer": "The Katyuri Dynasty."
    },
    {
        "id": 35,
        "question": "Who was the first British Commissioner of Kumaon after the Anglo-Nepalese War?",
        "answer": "Edward Gardner."
    },
    {
        "id": 36,
        "question": "Which British explorer or administrator is known for implementing early revenue settlements in Kumaon/Garhwal?",
        "answer": "George William Traill."
    },
    {
        "id": 37,
        "question": "Who is the author of the famous historical book \"Kumaon Ka Itihas\"?",
        "answer": "Badri Dutt Pandey."
    },
    {
        "id": 38,
        "question": "Who is the author of \"Garhwal Paintings\"?",
        "answer": "Mukundi Lal."
    },
    {
        "id": 39,
        "question": "What was the ancient/historical name of Uttarkashi?",
        "answer": "Barahat."
    },
    {
        "id": 40,
        "question": "Who was the freedom fighter from Tehri Garhwal who died in 1944 after an 84-day hunger strike against autocratic rule?",
        "answer": "Dev Suman."
    },
    {
        "id": 41,
        "question": "Who founded the Gandhi Ashram in Almora?",
        "answer": "Shanti Lal Chaturvedi."
    },
    {
        "id": 42,
        "question": "Who was the first Chief Commissioner of Kumaon in independent India?",
        "answer": "K.L. Mehta."
    },
    {
        "id": 43,
        "question": "Who is the only recipient of the \"Bharat Ratna\" from Uttarakhand to date?",
        "answer": "Govind Ballabh Pant (awarded in 1957)."
    },
    {
        "id": 44,
        "question": "Who was the first recipient of the Padma Vibhushan from Uttarakhand?",
        "answer": "Ghananand Pandey."
    },
    {
        "id": 45,
        "question": "Who was the first Uttarakhand-born winner of a Nobel Prize?",
        "answer": "Ronald Ross (born in Almora, awarded for Malaria research)."
    },
    {
        "id": 46,
        "question": "Who was the first Chief Minister of Uttarakhand?",
        "answer": "Nityanand Swami."
    },
    {
        "id": 47,
        "question": "Who was the first elected Chief Minister of the state (after the first assembly elections)?",
        "answer": "Narayan Dutt Tiwari."
    },
    {
        "id": 48,
        "question": "Who is the only Chief Minister of Uttarakhand to complete a full 5-year term?",
        "answer": "Narayan Dutt Tiwari."
    },
    {
        "id": 49,
        "question": "What is the total number of members in the Uttarakhand Legislative Assembly (Vidhan Sabha)?",
        "answer": "70."
    },
    {
        "id": 50,
        "question": "Where is the High Court of Uttarakhand located?",
        "answer": "Nainital."
    },
    {
        "id": 51,
        "question": "Who was the first Governor of Uttarakhand?",
        "answer": "Surjit Singh Barnala."
    },
    {
        "id": 52,
        "question": "Which district has the highest number of tehsils in the state?",
        "answer": "Pithoragarh."
    },
    {
        "id": 53,
        "question": "Where is the Lal Bahadur Shastri National Academy of Administration (LBSNAA) located?",
        "answer": "Mussoorie."
    },
    {
        "id": 54,
        "question": "What is the traditional martial dance of the Kumaon region called?",
        "answer": "Chholiya."
    },
    {
        "id": 55,
        "question": "Which local festival is known as the \"Butter Festival\" and is celebrated in Dayara Bugyal?",
        "answer": "Anduri Utsav."
    },
    {
        "id": 56,
        "question": "\"Aipan\" is a traditional art form of Uttarakhand. What colors does it predominantly use?",
        "answer": "White paste (rice flour) drawn over a red (geru) background."
    },
    {
        "id": 57,
        "question": "What is \"Bulaak\" in the context of Uttarakhandi culture?",
        "answer": "A traditional ornament worn on the nose."
    },
    {
        "id": 58,
        "question": "Where is the Hill Jatra festival, known for its pastoral and agricultural roots, celebrated?",
        "answer": "Soar Valley, Pithoragarh."
    },
    {
        "id": 59,
        "question": "The famous Egaas Bagwal is celebrated how many days after Diwali?",
        "answer": "11 days."
    },
    {
        "id": 60,
        "question": "Which district is famous for \"Bal Mithai,\" a sweet made from roasted khoya coated with sugar balls?",
        "answer": "Almora."
    },
    {
        "id": 61,
        "question": "To which deity is the Badrinath temple dedicated?",
        "answer": "Lord Vishnu."
    },
    {
        "id": 62,
        "question": "To which deity is the Kedarnath temple dedicated?",
        "answer": "Lord Shiva."
    },
    {
        "id": 63,
        "question": "Apart from Kedarnath and Badrinath, which two shrines make up the \"Char Dham\" of Uttarakhand?",
        "answer": "Gangotri and Yamunotri."
    },
    {
        "id": 64,
        "question": "Which Sikh pilgrimage site is located in the Chamoli district at a high altitude?",
        "answer": "Hemkund Sahib."
    },
    {
        "id": 65,
        "question": "Which famous fair is held at the confluence of the Kali and Gori rivers in Jauljibi?",
        "answer": "Jauljibi Mela."
    },
    {
        "id": 66,
        "question": "What is the traditional dress generally worn by Garhwali women called?",
        "answer": "Ghaghra-Choli (often with a Pichhaura)."
    },
    {
        "id": 67,
        "question": "Which town is famously known as the \"Yoga Capital of the World\"?",
        "answer": "Rishikesh."
    },
    {
        "id": 68,
        "question": "Which region of Uttarakhand is known for the Nanda Devi Raj Jat Yatra, held every 12 years?",
        "answer": "Chamoli/Garhwal region."
    },
    {
        "id": 69,
        "question": "Which is the oldest National Park in India, located in Uttarakhand?",
        "answer": "Jim Corbett National Park (established in 1936)."
    },
    {
        "id": 70,
        "question": "What was the original name of Jim Corbett National Park?",
        "answer": "Hailey National Park."
    },
    {
        "id": 71,
        "question": "Which National Park in Uttarakhand is located across the Shivalik range in Haridwar, Dehradun, and Pauri?",
        "answer": "Rajaji National Park."
    },
    {
        "id": 72,
        "question": "Which National Park in Uttarakhand is recognized as a UNESCO World Heritage Site?",
        "answer": "Nanda Devi and Valley of Flowers National Parks."
    },
    {
        "id": 73,
        "question": "Which river passes directly through the Valley of Flowers?",
        "answer": "Pushpawati River."
    },
    {
        "id": 74,
        "question": "Which is the largest National Park in Uttarakhand by area?",
        "answer": "Gangotri National Park."
    },
    {
        "id": 75,
        "question": "Which is the smallest National Park in the state?",
        "answer": "Valley of Flowers National Park."
    },
    {
        "id": 76,
        "question": "Where is the Asan Conservation Reserve, known as India's first conservation reserve and a haven for birds, located?",
        "answer": "Dehradun."
    },
    {
        "id": 77,
        "question": "Which wildlife sanctuary is famous for having the maximum number of musk deer?",
        "answer": "Askot Wildlife Sanctuary (Pithoragarh)."
    },
    {
        "id": 78,
        "question": "Who was the pioneer of the Chipko Movement in Uttarakhand?",
        "answer": "Sunderlal Bahuguna and Gaura Devi."
    },
    {
        "id": 79,
        "question": "According to the 2011 census, which district has the highest population?",
        "answer": "Haridwar."
    },
    {
        "id": 80,
        "question": "Which district has the lowest population in the state?",
        "answer": "Rudraprayag."
    },
    {
        "id": 81,
        "question": "Which district boasts the highest literacy rate in Uttarakhand?",
        "answer": "Dehradun."
    },
    {
        "id": 82,
        "question": "Which district has the highest sex ratio in the state?",
        "answer": "Almora."
    },
    {
        "id": 83,
        "question": "Which district has the lowest sex ratio?",
        "answer": "Haridwar."
    },
    {
        "id": 84,
        "question": "Where is the G.B. Pant University of Agriculture and Technology (India's first agricultural university) located?",
        "answer": "Pantnagar (Udham Singh Nagar)."
    },
    {
        "id": 85,
        "question": "Where is the Indian Military Academy (IMA) situated?",
        "answer": "Dehradun."
    },
    {
        "id": 86,
        "question": "India's first Chief of Defence Staff (CDS), Gen. Bipin Rawat, belonged to which district of Uttarakhand?",
        "answer": "Pauri Garhwal."
    },
    {
        "id": 87,
        "question": "Who was the first woman from Uttarakhand (and India) to scale Mount Everest?",
        "answer": "Bachendri Pal."
    },
    {
        "id": 88,
        "question": "Who is the author of the famous book \"Man-Eaters of Kumaon\"?",
        "answer": "Jim Corbett."
    },
    {
        "id": 89,
        "question": "What is the real name of Yogi Adityanath, who was born in Pauri Garhwal?",
        "answer": "Ajay Singh Bisht."
    },
    {
        "id": 90,
        "question": "Which two towns are proposed to be connected by the longest road tunnel in the world (approx. 30 km)?",
        "answer": "Dehradun and Tehri."
    },
    {
        "id": 91,
        "question": "Which place in Uttarakhand is famous for a specific, high-quality variety of tea leaves?",
        "answer": "Berinag."
    },
    {
        "id": 92,
        "question": "Which district is known as the \"Mini Kashmir of Uttarakhand\"?",
        "answer": "Pithoragarh."
    },
    {
        "id": 93,
        "question": "What is the local name for the berries of the Myrica esculenta tree, heavily consumed in Uttarakhand?",
        "answer": "Kaphal."
    },
    {
        "id": 94,
        "question": "Which district in Uttarakhand has borders with both Nepal and China?",
        "answer": "Pithoragarh."
    },
    {
        "id": 95,
        "question": "Which dam is known as the highest dam in India and Asia?",
        "answer": "Tehri Dam (260.5 meters)."
    },
    {
        "id": 96,
        "question": "Which is the oldest canal in the state of Uttarakhand?",
        "answer": "Upper Ganga Canal."
    },
    {
        "id": 97,
        "question": "Which district has the highest net sown agricultural land area?",
        "answer": "Udham Singh Nagar."
    },
    {
        "id": 98,
        "question": "Who was the first woman MP from Uttarakhand after the state's formation?",
        "answer": "Mala Rajya Laxmi Shah."
    },
    {
        "id": 99,
        "question": "Which two rivers merge at Vishnuprayag?",
        "answer": "Alaknanda and Dhauliganga."
    },
    {
        "id": 100,
        "question": "Which two rivers meet at Nandaprayag?",
        "answer": "Alaknanda and Nandakini."
    },
    {
        "id": 101,
        "question": "Which two rivers form a confluence at Karnaprayag?",
        "answer": "Alaknanda and Pindar."
    },
    {
        "id": 102,
        "question": "Which two rivers converge at Rudraprayag?",
        "answer": "Alaknanda and Mandakini."
    },
    {
        "id": 103,
        "question": "At which Prayag does the Alaknanda officially become the Ganga?",
        "answer": "Devprayag (where it meets the Bhagirathi)."
    },
    {
        "id": 104,
        "question": "Which major river originates from the Bandarpoonch glacier?",
        "answer": "Yamuna."
    },
    {
        "id": 105,
        "question": "The Pindar river originates from which glacier?",
        "answer": "Pindari Glacier."
    },
    {
        "id": 106,
        "question": "Which river is known as \"Saryu\" in its upper reaches and flows through Ayodhya later?",
        "answer": "Kali River (also known as Sharda)."
    },
    {
        "id": 107,
        "question": "Which river system is the largest non-glacial perennial river system in Uttarakhand?",
        "answer": "Nayar River (Eastern and Western Nayar)."
    },
    {
        "id": 108,
        "question": "The Dudhatoli Range is the source of which major perennial river?",
        "answer": "Ramganga (West)."
    },
    {
        "id": 109,
        "question": "Where does the Mandakini river originate?",
        "answer": "Chorabari Glacier (near Kedarnath)."
    },
    {
        "id": 110,
        "question": "Which high-altitude lake is located near the Hemkund Sahib Gurudwara?",
        "answer": "Lokpal Lake."
    },
    {
        "id": 111,
        "question": "Which glacier is the largest in the Kumaon region?",
        "answer": "Milam Glacier."
    },
    {
        "id": 112,
        "question": "Which glacial lake was responsible for the devastating 2013 Kedarnath floods?",
        "answer": "Chorabari Tal (also known as Gandhi Sarovar)."
    },
    {
        "id": 113,
        "question": "Which river forms the stunning Sahastradhara waterfalls in Dehradun?",
        "answer": "Baldi River (a tributary of the Song river)."
    },
    {
        "id": 114,
        "question": "Which is the highest Shiva temple in the world?",
        "answer": "Tungnath."
    },
    {
        "id": 115,
        "question": "Which part of Lord Shiva is worshipped at Kedarnath (Pratham Kedar)?",
        "answer": "The hump (of the bull form)."
    },
    {
        "id": 116,
        "question": "Which part of Lord Shiva is worshipped at Tungnath?",
        "answer": "The arms."
    },
    {
        "id": 117,
        "question": "At which Panch Kedar temple is the face of Lord Shiva worshipped?",
        "answer": "Rudranath."
    },
    {
        "id": 118,
        "question": "Which Panch Kedar temple remains open throughout the year?",
        "answer": "Kalpeshwar (where the matted hair/Jata is worshipped)."
    },
    {
        "id": 119,
        "question": "At which temple is the navel of Lord Shiva worshipped?",
        "answer": "Madhyamaheshwar."
    },
    {
        "id": 120,
        "question": "Which temple is known as the \"Bhavishya Badri\" (Future Badrinath)?",
        "answer": "The temple in Subhai village near Tapovan, Joshimath."
    },
    {
        "id": 121,
        "question": "Which of the Panch Badri temples is the only one to remain open year-round?",
        "answer": "Vridha Badri (Animath village)."
    },
    {
        "id": 122,
        "question": "In which form is Lord Vishnu worshipped at Yogdhyan Badri?",
        "answer": "Meditating pose."
    },
    {
        "id": 123,
        "question": "Who is believed to have established the Adi Badri temple complex?",
        "answer": "Adi Shankaracharya."
    },
    {
        "id": 124,
        "question": "Which famous temple is situated directly on the banks of the Mandakini river?",
        "answer": "Kedarnath."
    },
    {
        "id": 125,
        "question": "Which Goddess's temple is situated on a rock pillar in the middle of the Alaknanda river near Srinagar?",
        "answer": "Dhari Devi."
    },
    {
        "id": 126,
        "question": "Which revered Sikh shrine was discovered by Sant Sohan Singh and Hawaldar Modan Singh?",
        "answer": "Hemkund Sahib."
    },
    {
        "id": 127,
        "question": "Which ancient sun temple in Uttarakhand is structurally similar to the Konark Sun Temple?",
        "answer": "Katarmal Sun Temple (Almora)."
    },
    {
        "id": 128,
        "question": "Which group of temples in Almora district is known for its cluster of 124 ancient stone shrines?",
        "answer": "Jageshwar Dham."
    },
    {
        "id": 129,
        "question": "How many Scheduled Tribes are officially recognized in Uttarakhand?",
        "answer": "Five (Tharu, Jaunsari, Buksa, Bhotia, and Raji)."
    },
    {
        "id": 130,
        "question": "Which tribe has the largest population in Uttarakhand?",
        "answer": "Tharu tribe."
    },
    {
        "id": 131,
        "question": "Which tribe claims descent from the Pandavas of the Mahabharata?",
        "answer": "Jaunsari tribe."
    },
    {
        "id": 132,
        "question": "Which tribe has the lowest population in Uttarakhand and is recognized as a Primitive Vulnerable Tribal Group (PVTG)?",
        "answer": "Raji (also known as Van-Rawat)."
    },
    {
        "id": 133,
        "question": "Which tribe historically engaged in trans-Himalayan trade with Tibet?",
        "answer": "Bhotia tribe."
    },
    {
        "id": 134,
        "question": "Which tribe primarily inhabits the Terai region of Udham Singh Nagar?",
        "answer": "Buksa."
    },
    {
        "id": 135,
        "question": "What is the traditional local name for the upper Dehradun district inhabited by the Jaunsari people?",
        "answer": "Jaunsar-Bawar."
    },
    {
        "id": 136,
        "question": "Which traditional festival of Uttarakhand involves lighting a bonfire and spinning a rope of fire?",
        "answer": "Igas Bagwal."
    },
    {
        "id": 137,
        "question": "Which spring festival involves young girls placing freshly picked flowers at the thresholds of houses?",
        "answer": "Phool Dei."
    },
    {
        "id": 138,
        "question": "\"Jhumelo\" and \"Nyuoli\" are types of what in Uttarakhandi culture?",
        "answer": "Traditional folk songs."
    },
    {
        "id": 139,
        "question": "What is \"Pichhaura\" in Kumaoni culture?",
        "answer": "A traditional saffron and red dupatta worn by women during auspicious ceremonies."
    },
    {
        "id": 140,
        "question": "Which district hosts the famous \"Bagwal\" stone-pelting festival at the Devidhura temple?",
        "answer": "Champawat."
    },
    {
        "id": 141,
        "question": "What is the traditional multi-story, earthquake-resistant architectural style of Uttarakhand called?",
        "answer": "Koti Banal architecture."
    },
    {
        "id": 142,
        "question": "Which musical instrument is known as the \"Queen of Garhwali instruments\"?",
        "answer": "Mashakbeen (Bagpipe)."
    },
    {
        "id": 143,
        "question": "What is the \"Kandali\" (Bichhu Ghas) festival?",
        "answer": "A festival celebrated every 12 years by the Shauka (Bhotia) tribe in Pithoragarh to commemorate the defeat of an invading army."
    },
    {
        "id": 144,
        "question": "Who built the Khagmara Fort in Almora?",
        "answer": "King Bhishma Chand."
    },
    {
        "id": 145,
        "question": "Who is known as the \"King of Kumaon\" due to his highly popular and effective administrative tenure?",
        "answer": "Sir Henry Ramsay."
    },
    {
        "id": 146,
        "question": "Which dynasty's kings used the title \"Pala\" and later adopted the title \"Shah\" in Garhwal?",
        "answer": "Parmar (Panwar) Dynasty."
    },
    {
        "id": 147,
        "question": "Who was the first king of the Chand dynasty to establish his capital at Champawat?",
        "answer": "Som Chand."
    },
    {
        "id": 148,
        "question": "Who formally shifted the capital of the Chand dynasty from Champawat to Almora?",
        "answer": "Kalyan Chand."
    },
    {
        "id": 149,
        "question": "Which Gurkha commanders led the successful invasion of Kumaon in 1790?",
        "answer": "Chautariya Bahadur Shah and Amar \u0938\u093f\u0902\u0939 Thapa."
    },
    {
        "id": 150,
        "question": "When did the devastating Gohna Lake flood occur?",
        "answer": "1894."
    },
    {
        "id": 151,
        "question": "In which year did the famous \"Kuli Begar\" movement succeed at the banks of the Saryu river in Bageshwar?",
        "answer": "1921."
    },
    {
        "id": 152,
        "question": "Who founded the \"Kumaon Parishad\" in 1916?",
        "answer": "Hargovind Pant, Badri Datt Pandey, and others."
    },
    {
        "id": 153,
        "question": "Who is popularly known as \"Garh Kesari\"?",
        "answer": "Anusuya Prasad Bahuguna."
    },
    {
        "id": 154,
        "question": "Who is known as \"Kumaon Kesari\"?",
        "answer": "Badri Datt Pandey."
    },
    {
        "id": 155,
        "question": "Which tragic event in Uttarakhand's statehood movement took place on September 2, 1994?",
        "answer": "Mussoorie firing incident."
    },
    {
        "id": 156,
        "question": "Which tragedy took place in Muzaffarnagar during the Uttarakhand statehood movement on October 2, 1994?",
        "answer": "Rampur Tiraha firing case."
    },
    {
        "id": 157,
        "question": "Which historical fort is situated in Pithoragarh and was originally built by the Gorkhas?",
        "answer": "Pithoragarh Fort (also known as London Fort)."
    },
    {
        "id": 158,
        "question": "Who established the Shanti Kunj ashram in Haridwar?",
        "answer": "Pandit Sriram Sharma Acharya."
    },
    {
        "id": 159,
        "question": "What is the official state fish of Uttarakhand?",
        "answer": "Golden Mahseer."
    },
    {
        "id": 160,
        "question": "According to the 2011 census, what is the approximate total population of Uttarakhand?",
        "answer": "1.01 Crore (10,086,292)."
    },
    {
        "id": 161,
        "question": "Which district has the highest rural population?",
        "answer": "Haridwar."
    },
    {
        "id": 162,
        "question": "Which district has the highest urban population?",
        "answer": "Dehradun."
    },
    {
        "id": 163,
        "question": "Which district has the lowest population density in Uttarakhand?",
        "answer": "Uttarkashi."
    },
    {
        "id": 164,
        "question": "What is the literacy rate of Uttarakhand as per the 2011 census?",
        "answer": "78.82%."
    },
    {
        "id": 165,
        "question": "Where is the headquarters of the Kumaon Regiment located?",
        "answer": "Ranikhet."
    },
    {
        "id": 166,
        "question": "Where is the headquarters of the Garhwal Rifles located?",
        "answer": "Lansdowne."
    },
    {
        "id": 167,
        "question": "Where is the Forest Research Institute (FRI) located?",
        "answer": "Dehradun."
    },
    {
        "id": 168,
        "question": "Where is the Indian Institute of Remote Sensing (IIRS) situated?",
        "answer": "Dehradun."
    },
    {
        "id": 169,
        "question": "Which institute in Roorkee is one of the oldest engineering colleges in Asia?",
        "answer": "Indian Institute of Technology (IIT) Roorkee (established in 1847)."
    },
    {
        "id": 170,
        "question": "In which city is the Aryabhatta Research Institute of Observational Sciences (ARIES) located?",
        "answer": "Nainital."
    },
    {
        "id": 171,
        "question": "Where is the Wadia Institute of Himalayan Geology located?",
        "answer": "Dehradun."
    },
    {
        "id": 172,
        "question": "Where is the High Altitude Plant Physiology Research Centre situated?",
        "answer": "Srinagar (Garhwal)."
    },
    {
        "id": 173,
        "question": "Which district is the major industrial hub of Uttarakhand due to the presence of SIDCUL?",
        "answer": "Udham Singh Nagar (Pantnagar) & Haridwar."
    },
    {
        "id": 174,
        "question": "Which mountain pass connects Uttarkashi with Tibet?",
        "answer": "Thang La."
    },
    {
        "id": 175,
        "question": "Which pass connects Chamoli with Pithoragarh?",
        "answer": "Barahoti Pass."
    },
    {
        "id": 176,
        "question": "Which is the second-highest peak in Uttarakhand after Nanda Devi?",
        "answer": "Kamet (7,756 meters)."
    },
    {
        "id": 177,
        "question": "Which mountain range separates the Doon Valley from the Gangetic plains?",
        "answer": "Shivalik Range."
    },
    {
        "id": 178,
        "question": "Which bugyal (alpine meadow) is known as the \"Meadow of Flowers\" and is a popular trek in Chamoli?",
        "answer": "Gorson Bugyal."
    },
    {
        "id": 179,
        "question": "Which bugyal is famous for the \"Butter Festival\" (Anduri Utsav)?",
        "answer": "Dayara Bugyal."
    },
    {
        "id": 180,
        "question": "Which is the largest bugyal in the Garhwal Himalayas?",
        "answer": "Bedni Bugyal."
    },
    {
        "id": 181,
        "question": "Where is the famous tourist spot 'Khirsu' located?",
        "answer": "Pauri Garhwal."
    },
    {
        "id": 182,
        "question": "Which lake is located near the town of Bhimtal and is larger than Naini Lake?",
        "answer": "Bhimtal Lake."
    },
    {
        "id": 183,
        "question": "Which lake in Uttarakhand has a distinct nine-cornered shape?",
        "answer": "Naukuchiatal."
    },
    {
        "id": 184,
        "question": "Which region is known as the \"Orchard Country\" of Uttarakhand due to its massive fruit output?",
        "answer": "Ramgarh (Nainital)."
    },
    {
        "id": 185,
        "question": "The Asan Barrage, famous for winter migratory birds, is built at the confluence of which rivers?",
        "answer": "Asan and Yamuna."
    },
    {
        "id": 186,
        "question": "Which town is located at the tri-junction of India, Nepal, and Tibet?",
        "answer": "Dharchula (near Lipulekh)."
    },
    {
        "id": 187,
        "question": "What is the geographical region immediately south of the Shivaliks, characterized by swamps and dense forests, called?",
        "answer": "Terai."
    },
    {
        "id": 188,
        "question": "What is the boulder-strewn, porous tract located immediately south of the Shivalik foothills called?",
        "answer": "Bhabar."
    },
    {
        "id": 189,
        "question": "Who was the first Chief of Army Staff of Uttarakhand origin?",
        "answer": "Gen. Bipin Chandra Joshi."
    },
    {
        "id": 190,
        "question": "Who is the author of the historical book \"Dehradun Gazetteer\"?",
        "answer": "H.G. Walton."
    },
    {
        "id": 191,
        "question": "Who wrote the famous monumental work \"Himalayan Gazetteer\"?",
        "answer": "E.T. Atkinson."
    },
    {
        "id": 192,
        "question": "Which environmentalist from Uttarakhand was awarded the Ramon Magsaysay Award in 1982 for his work with the Chipko Movement?",
        "answer": "Chandi Prasad Bhatt."
    },
    {
        "id": 193,
        "question": "Which famous poet from Kumaon is known as \"Lokratna\" and is considered one of the earliest poets of the region?",
        "answer": "Gumani Pant."
    },
    {
        "id": 194,
        "question": "Who was the first person from Uttarakhand to win the Dronacharya Award?",
        "answer": "Hari Singh Thapa (Boxing)."
    },
    {
        "id": 195,
        "question": "Who was the first woman Jagar singer of Uttarakhand to be awarded the Padma Shri?",
        "answer": "Basanti Bisht."
    },
    {
        "id": 196,
        "question": "Which famous British-descent author has lived in Landour, Mussoorie for decades and wrote \"The Room on the Roof\"?",
        "answer": "Ruskin Bond."
    },
    {
        "id": 197,
        "question": "Which Kumaoni revolutionary is often called the \"Gandhi of Uttarakhand\"?",
        "answer": "Indramani Badoni."
    },
    {
        "id": 198,
        "question": "Who was the first Chairman of the Uttarakhand Public Service Commission (UKPSC)?",
        "answer": "N.P. Navani."
    },
    {
        "id": 199,
        "question": "Which was the first hydroelectric power project built in Uttarakhand (and North India)?",
        "answer": "Galogi Power Plant (Mussoorie, commissioned in 1909)."
    },
    {
        "id": 200,
        "question": "Where is the largest paper mill in Uttarakhand located?",
        "answer": "Century Paper Mill, Lalkuan (Nainital)."
    },
    {
        "id": 201,
        "question": "In which year was the Roorkee Cantonment established?",
        "answer": "1853."
    },
    {
        "id": 202,
        "question": "When was the Kumaon University and Garhwal University (now HNBGU) established?",
        "answer": "1973."
    },
    {
        "id": 203,
        "question": "Where is the headquarters of the Oil and Natural Gas Corporation (ONGC) located?",
        "answer": "Dehradun."
    },
    {
        "id": 204,
        "question": "Which institute in Uttarakhand trains the officers of the Indian Police Service (IPS)?",
        "answer": "Wait, that's in Hyderabad (SVPNPA)\u2014but the Indira Gandhi National Forest Academy (IGNFA), which trains Indian Forest Service (IFS) officers, is located in Dehradun."
    },
    {
        "id": 205,
        "question": "Where is the VIP training ground, the Doon School, located and when was it established?",
        "answer": "Dehradun, established in 1935 by Satish Ranjan Das."
    },
    {
        "id": 206,
        "question": "Where is the Vivekananda Parvatiya Krishi Anusandhan Sansthan (VPKAS) situated?",
        "answer": "Almora (founded by Prof. Boshi Sen)."
    },
    {
        "id": 207,
        "question": "Who was the first Director-General of Police (DGP) of Uttarakhand?",
        "answer": "Ashok Kant Sharan."
    },
    {
        "id": 208,
        "question": "Who was the first Chief Justice of the Uttarakhand High Court?",
        "answer": "Justice Ashok A. Desai."
    },
    {
        "id": 209,
        "question": "Which district has the maximum total forest cover by area?",
        "answer": "Pauri Garhwal."
    },
    {
        "id": 210,
        "question": "Which district has the highest percentage of its geographical area under forest cover?",
        "answer": "Nainital."
    },
    {
        "id": 211,
        "question": "What is the State Butterfly of Uttarakhand?",
        "answer": "Common Peacock (Papilio bianor), declared in 2016."
    },
    {
        "id": 212,
        "question": "In which year was the Nanda Devi Biosphere Reserve established?",
        "answer": "1988."
    },
    {
        "id": 213,
        "question": "Which prominent environmental movement was initiated by Kalyan Singh Rawat in 1995?",
        "answer": "Maiti Movement (planting trees during weddings)."
    },
    {
        "id": 214,
        "question": "Who led the \"Beej Bachao Andolan\" (Save the Seed Movement) in Uttarakhand?",
        "answer": "Vijay Jardhari."
    },
    {
        "id": 215,
        "question": "What is the main objective of the Raksha Sutra Andolan, started in 1994 in Tehri Garhwal?",
        "answer": "Protecting trees from being cut by tying a sacred thread (Raksha Sutra) around them."
    },
    {
        "id": 216,
        "question": "In which season does the state tree, Buransh, typically bloom?",
        "answer": "Spring (February to April)."
    },
    {
        "id": 217,
        "question": "When did the Gorkhas first invade and capture Kumaon?",
        "answer": "1790."
    },
    {
        "id": 218,
        "question": "For how many years did the Gorkhas rule Kumaon and Garhwal, respectively?",
        "answer": "25 years in Kumaon (1790-1815) and 10.5 years in Garhwal (1804-1815)."
    },
    {
        "id": 219,
        "question": "Which historic battle in 1804 resulted in the death of King Pradyumna Shah against the Gorkhas?",
        "answer": "Battle of Khurbura (Dehradun)."
    },
    {
        "id": 220,
        "question": "Which treaty officially ended the Anglo-Nepalese War and the Gorkha rule in Uttarakhand?",
        "answer": "Treaty of Sugauli (signed 1815, ratified 1816)."
    },
    {
        "id": 221,
        "question": "Who was the last ruling king of the Tehri Riyasat (Princely State)?",
        "answer": "Manabendra Shah."
    },
    {
        "id": 222,
        "question": "On what date did the Tehri Princely State officially merge with the Indian Union?",
        "answer": "August 1, 1949."
    },
    {
        "id": 223,
        "question": "When was the \"Almora Akhbar\" started?",
        "answer": "1871."
    },
    {
        "id": 224,
        "question": "Who started the prominent weekly newspaper \"Shakti\" in 1918 after Almora Akhbar was banned?",
        "answer": "Badri Datt Pandey."
    },
    {
        "id": 225,
        "question": "Where did Mahatma Gandhi stay for 14 days in 1929, writing a commentary on the Gita?",
        "answer": "Anasakti Ashram in Kausani."
    },
    {
        "id": 226,
        "question": "Which place in Uttarakhand did Mahatma Gandhi famously describe as the \"Switzerland of India\"?",
        "answer": "Kausani."
    },
    {
        "id": 227,
        "question": "Who led the Peshawar Kand in 1930?",
        "answer": "Veer Chandra Singh Garhwali."
    },
    {
        "id": 228,
        "question": "Which regiment of the British Indian Army refused to fire on unarmed Pathans during the Peshawar Kand?",
        "answer": "2/18 Royal Garhwal Rifles."
    },
    {
        "id": 229,
        "question": "Who was the first person from Uttarakhand to be jailed during the Indian freedom struggle?",
        "answer": "Mohan Singh Mehta."
    },
    {
        "id": 230,
        "question": "Which incident is known as the \"Bardoli of Kumaon\" due to its role in the Quit India Movement?",
        "answer": "The Sult incident (September 5, 1942)."
    },
    {
        "id": 231,
        "question": "Who wrote the historical book \"Garhwal Ka Itihas\"?",
        "answer": "Hari Krishna Raturi."
    },
    {
        "id": 232,
        "question": "Which district is known as \"Tamra Nagari\" (Copper City) of Uttarakhand?",
        "answer": "Almora."
    },
    {
        "id": 233,
        "question": "Which popular town is colloquially known as \"Chhoti Vilayat\"?",
        "answer": "Nainital."
    },
    {
        "id": 234,
        "question": "Which city serves as the \"Gateway of Garhwal\"?",
        "answer": "Kotdwar."
    },
    {
        "id": 235,
        "question": "Which city serves as the \"Gateway of Kumaon\"?",
        "answer": "Kathgodam."
    },
    {
        "id": 236,
        "question": "Which place is famously known as the \"Cherrapunji of Uttarakhand\" because it receives the highest rainfall in the state?",
        "answer": "Narendra Nagar (Tehri Garhwal)."
    },
    {
        "id": 237,
        "question": "Who discovered the Valley of Flowers in 1931?",
        "answer": "Frank S. Smythe (a British mountaineer)."
    },
    {
        "id": 238,
        "question": "What is the longest river entirely flowing within the borders of Uttarakhand?",
        "answer": "Kali River (252 km)."
    },
    {
        "id": 239,
        "question": "Which is the highest waterfall in Uttarakhand?",
        "answer": "Birthi Falls (126 meters) in Pithoragarh."
    },
    {
        "id": 240,
        "question": "Which famous sulphur-rich spring/waterfall is located in Dehradun?",
        "answer": "Sahastradhara."
    },
    {
        "id": 241,
        "question": "Where is the beautiful high-altitude meadow \"Moila Top\" located?",
        "answer": "Chakrata (Dehradun district)."
    },
    {
        "id": 242,
        "question": "Which lake's water is famously known to have a reddish hue?",
        "answer": "Vasuki Tal (near Kedarnath)."
    },
    {
        "id": 243,
        "question": "Dodi Tal, a famous trekking destination in Uttarkashi, is known for what unique shape?",
        "answer": "Six-cornered (Hexagonal)."
    },
    {
        "id": 244,
        "question": "Satopanth Lake, located ahead of Badrinath, has what distinct shape?",
        "answer": "Triangular."
    },
    {
        "id": 245,
        "question": "Where is Patal Bhuvaneshwar, a limestone cave temple, located?",
        "answer": "Pithoragarh."
    },
    {
        "id": 246,
        "question": "Lakhamandal, famous for its ancient Shiva temple and Mahabharata legends (Lakshagriha), is located in which district?",
        "answer": "Dehradun (Jaunsar-Bawar region)."
    },
    {
        "id": 247,
        "question": "Which popular folk dance of the Jaunsar-Bawar region is performed during festivals?",
        "answer": "Barada Nati."
    },
    {
        "id": 248,
        "question": "What is \"Langvir Nritya\"?",
        "answer": "An acrobatic dance performed by men in the Garhwal region, involving a long bamboo pole."
    },
    {
        "id": 249,
        "question": "Golu Devta, whose most famous temple is at Chitai (Almora), is worshipped as the God of what?",
        "answer": "Justice."
    },
    {
        "id": 250,
        "question": "What unique offering is made by devotees at the Chitai Golu Devta temple?",
        "answer": "Brass bells and written petitions (letters) seeking justice."
    },
    {
        "id": 251,
        "question": "Where is the Haat Kalika Temple, highly revered by the Kumaon Regiment, located?",
        "answer": "Gangolihat (Pithoragarh)."
    },
    {
        "id": 252,
        "question": "The Gauchar Mela is a historic trade and cultural fair held in which district?",
        "answer": "Chamoli."
    },
    {
        "id": 253,
        "question": "In which year did Deputy Commissioner Burnell start the Gauchar Mela?",
        "answer": "1943."
    },
    {
        "id": 254,
        "question": "Which fair in the Jaunsar-Bawar region features a mock bow-and-arrow battle?",
        "answer": "Bishu Mela."
    },
    {
        "id": 255,
        "question": "Which renowned painter was the central figure of the Garhwal School of Painting?",
        "answer": "Mola Ram."
    },
    {
        "id": 256,
        "question": "Where was Mola Ram's art gallery located?",
        "answer": "Srinagar (Garhwal)."
    },
    {
        "id": 257,
        "question": "What is \"Jhangoora\" in the local Uttarakhand diet?",
        "answer": "Barnyard Millet (often used to make sweet kheer)."
    },
    {
        "id": 258,
        "question": "What is \"Ugal\" in the context of Uttarakhandi agriculture?",
        "answer": "Local buckwheat (used to make flour during fasting)."
    },
    {
        "id": 259,
        "question": "What is the traditional name for terrace farming practiced in the hilly terrain of Uttarakhand?",
        "answer": "C.D. Numaar Kheti."
    },
    {
        "id": 260,
        "question": "Where is the Syahi Devi temple located?",
        "answer": "Almora."
    },
    {
        "id": 261,
        "question": "Which famous fair is held in memory of Veer Chandra Singh Garhwali in the Pauri district?",
        "answer": "Peethsain Mela."
    },
    {
        "id": 262,
        "question": "Who was the first woman Governor of Uttarakhand?",
        "answer": "Margaret Alva."
    },
    {
        "id": 263,
        "question": "Who is known as the \"Mushroom Lady of Uttarakhand\" for popularizing mushroom cultivation?",
        "answer": "Divya Rawat."
    },
    {
        "id": 264,
        "question": "Who was the first person to receive the \"Uttarakhand Khel Ratna\" award?",
        "answer": "Jaspal Rana (Shooting)."
    },
    {
        "id": 265,
        "question": "Where is the Kaleshwar Mahadev temple, named after Sage Kapil, located?",
        "answer": "Lansdowne."
    },
    {
        "id": 266,
        "question": "The Tapkeshwar Mahadev Temple in Dehradun is located on the banks of which river?",
        "answer": "Tamsa (Tons) River."
    },
    {
        "id": 267,
        "question": "Vashistha Gufa, an ancient meditation cave, is situated on the banks of the Ganga near which town?",
        "answer": "Rishikesh (in Tehri Garhwal district)."
    },
    {
        "id": 268,
        "question": "Kankhal (in Haridwar) is historically associated with which mythological figure?",
        "answer": "Daksha Prajapati."
    },
    {
        "id": 269,
        "question": "The Chandi Devi Temple in Haridwar is situated atop which hill?",
        "answer": "Neel Parvat."
    },
    {
        "id": 270,
        "question": "The Mansa Devi Temple in Haridwar is situated atop which hill?",
        "answer": "Bilwa Parvat."
    },
    {
        "id": 271,
        "question": "Which ashram near Rishikesh was established by Madeleine Slade (Mira Behn), a disciple of Gandhi?",
        "answer": "Pashulok Ashram."
    },
    {
        "id": 272,
        "question": "Kainchi Dham, which attracts visitors worldwide including tech billionaires, is associated with which spiritual leader?",
        "answer": "Neem Karoli Baba."
    },
    {
        "id": 273,
        "question": "What is the total distance covered during the Nanda Devi Raj Jat Yatra?",
        "answer": "Approximately 280 km."
    },
    {
        "id": 274,
        "question": "From which specific village does the Nanda Devi Raj Jat Yatra commence?",
        "answer": "Nauti village (Chamoli)."
    },
    {
        "id": 275,
        "question": "Which river valley in Uttarkashi is famous for the cultivation of high-quality red rice?",
        "answer": "Sirai Valley (Purola)."
    },
    {
        "id": 276,
        "question": "Who was the first woman Vice-Chancellor of a university in Uttarakhand?",
        "answer": "Sushila Dobhal."
    },
    {
        "id": 277,
        "question": "Which state highway in Uttarakhand is famously known as the \"Kailash Mansarovar Route\"?",
        "answer": "State Highway linking Dharchula to Lipulekh."
    },
    {
        "id": 278,
        "question": "Which district of Uttarakhand has the highest number of Gram Panchayats?",
        "answer": "Pauri Garhwal."
    },
    {
        "id": 279,
        "question": "Which district has the lowest number of Gram Panchayats?",
        "answer": "Champawat."
    },
    {
        "id": 280,
        "question": "What is the name of the state's traditional agricultural instrument used for leveling plowed fields?",
        "answer": "Patela or Mayi."
    },
    {
        "id": 281,
        "question": "What was the historical name of the Haridwar region as mentioned in ancient texts?",
        "answer": "Mayapuri."
    },
    {
        "id": 282,
        "question": "In the context of local administration, what was the \"Khat\" system in the Jaunsar-Bawar region?",
        "answer": "A cluster of villages administered by a \"Sadar Sayana\"."
    },
    {
        "id": 283,
        "question": "What was the \"Padhan\" in the traditional Kumaoni administrative structure?",
        "answer": "The village headman responsible for revenue collection."
    },
    {
        "id": 284,
        "question": "What is the ancient name of Joshimath?",
        "answer": "Jyotirmath."
    },
    {
        "id": 285,
        "question": "Who is credited with restoring the Badrinath temple in the 8th century?",
        "answer": "Adi Shankaracharya."
    },
    {
        "id": 286,
        "question": "At what location in Uttarakhand did Adi Shankaracharya attain Mahasamadhi?",
        "answer": "Kedarnath."
    },
    {
        "id": 287,
        "question": "What is the name of the traditional copper or brass vessel used to store water in Uttarakhandi households?",
        "answer": "Gaggar."
    },
    {
        "id": 288,
        "question": "Which town was the traditional capital of the Katyuri Dynasty before they moved to Baijnath?",
        "answer": "Joshimath."
    },
    {
        "id": 289,
        "question": "What is the literal translation of \"Panch Prayag\"?",
        "answer": "The Five Confluences."
    },
    {
        "id": 290,
        "question": "Who was the first Kumaoni author to win the Sahitya Akademi Award?",
        "answer": "Ramesh Chandra Shah (for his novel Vinayak in 2014, though Ruskin Bond won earlier from the state). Correction for pure local language: Sumitranandan Pant is the literary giant of Hindi from Kumaon, but for the Sahitya Akademi Award specifically, Sudama Prasad 'Premi' and others are noted. Let's keep it clean: Which prominent Hindi poet from Kumaon won the Jnanpith Award in 1968? Sumitranandan Pant."
    },
    {
        "id": 291,
        "question": "Which organization operates the 108 emergency ambulance service in Uttarakhand?",
        "answer": "The state government (often called the Deen Dayal Upadhyay 108 Service)."
    },
    {
        "id": 292,
        "question": "Which district was created by carving out parts of Dehradun, Saharanpur, and Haridwar?",
        "answer": "Haridwar (created in 1988, before the state's formation)."
    },
    {
        "id": 293,
        "question": "Where is the state's only Indian Institute of Management (IIM) located?",
        "answer": "Kashipur (Udham Singh Nagar)."
    },
    {
        "id": 294,
        "question": "Which city in Uttarakhand is known as the \"Cultural Capital of Kumaon\"?",
        "answer": "Almora."
    },
    {
        "id": 295,
        "question": "Which river is known as the \"Sorrow of Kumaon\" due to its historical flooding?",
        "answer": "Kosi River."
    },
    {
        "id": 296,
        "question": "On what exact date did \"Uttaranchal\" officially change its name to \"Uttarakhand\"?",
        "answer": "January 1, 2007."
    },
    {
        "id": 297,
        "question": "In which script is the famous Ashokan Rock Edict at Kalsi written?",
        "answer": "Brahmi script (and the language used is Prakrit)."
    },
    {
        "id": 298,
        "question": "Who established the \"Garh Desh Seva Sangh\" in Delhi in 1938 to advocate for a separate state?",
        "answer": "Sridev Suman."
    },
    {
        "id": 299,
        "question": "Which British Commissioner of Kumaon introduced the \"Patwari\" system for revenue collection in 1819?",
        "answer": "George William Traill."
    },
    {
        "id": 300,
        "question": "Who was the only king of the Chand dynasty to visit the court of Mughal Emperor Akbar?",
        "answer": "Rudra Chand."
    },
    {
        "id": 301,
        "question": "The infamous \"Kuli Begar\" register, which mandated unpaid labor, was washed away in which river in 1921?",
        "answer": "Saryu River (at Bageshwar)."
    },
    {
        "id": 302,
        "question": "Which historical treaty formalized the boundaries between British India and Nepal, shaping Uttarakhand's eastern border?",
        "answer": "Treaty of Sugauli (signed 1815, ratified 1816)."
    },
    {
        "id": 303,
        "question": "Who was the first elected speaker of the Uttarakhand Legislative Assembly?",
        "answer": "Yashpal Arya (Prakash Pant was the first interim speaker)."
    },
    {
        "id": 304,
        "question": "How many municipal corporations (Nagar Nigams) are currently in Uttarakhand?",
        "answer": "9 (Dehradun, Haridwar, Haldwani, Rudrapur, Kashipur, Roorkee, Rishikesh, Kotdwar, and Srinagar)."
    },
    {
        "id": 305,
        "question": "Which district was carved out of Pithoragarh in 1997?",
        "answer": "Champawat."
    },
    {
        "id": 306,
        "question": "What is the official name of the state's e-governance portal for digitized land records?",
        "answer": "Devbhoomi Portal."
    },
    {
        "id": 307,
        "question": "Which high-altitude pass connects the Darma Valley with the Lassar Yankti Valley in Pithoragarh?",
        "answer": "Sin La Pass."
    },
    {
        "id": 308,
        "question": "Traill's Pass connects which two major valleys?",
        "answer": "Pindari Valley and Milam Valley."
    },
    {
        "id": 309,
        "question": "Which underground hydroelectric project is built on the Tons River in the Dehradun district?",
        "answer": "Chibro Power Station."
    },
    {
        "id": 310,
        "question": "The Maneri Bhali Hydroelectric Project is located on which river?",
        "answer": "Bhagirathi River (in Uttarkashi)."
    },
    {
        "id": 311,
        "question": "Where is the prominent magnesite mining area, Jhiroli, located?",
        "answer": "Bageshwar district."
    },
    {
        "id": 312,
        "question": "What is the name of the major geological fault line that separates the Greater Himalayas from the Lesser (Middle) Himalayas in Uttarakhand?",
        "answer": "Main Central Thrust (MCT)."
    },
    {
        "id": 313,
        "question": "The Askot Musk Deer Sanctuary is primarily located in the basin of which river?",
        "answer": "Goriganga River."
    },
    {
        "id": 314,
        "question": "Which spectacular alpine meadow (bugyal) is situated en route to the Roopkund trek?",
        "answer": "Bedni Bugyal."
    },
    {
        "id": 315,
        "question": "Where is the Govind Ballabh Pant National Institute of Himalayan Environment (NIHE) located?",
        "answer": "Kosi-Katarmal (Almora)."
    },
    {
        "id": 316,
        "question": "Approximately how long is the international border that Uttarakhand shares with Nepal?",
        "answer": "275 km."
    },
    {
        "id": 317,
        "question": "In which year was the traditional Garhwali festival \"Ramman\" added to the UNESCO Representative List of the Intangible Cultural Heritage of Humanity?",
        "answer": "2009."
    },
    {
        "id": 318,
        "question": "Which wind instrument is considered the traditional leading instrument during the Chholiya martial dance?",
        "answer": "Turi (often accompanied by the Ransingha)."
    },
    {
        "id": 319,
        "question": "What is a \"Naula\" or \"Dhara\" in the context of traditional Uttarakhand?",
        "answer": "Traditional, step-well style freshwater springs/aquifers."
    },
    {
        "id": 320,
        "question": "Which famous Kumaoni poet was popularly known as \"Gaurda\"?",
        "answer": "Gauri Datt Pande."
    },
    {
        "id": 321,
        "question": "Who is known as the \"Charan\" (Wanderer) of Uttarakhand for his extensive historical travelogues?",
        "answer": "Shiv Prasad Dabral."
    },
    {
        "id": 322,
        "question": "Which temple complex in Kumaon famously features the \"Kacheri\" (Court) of Golu Devta, where devotees hang letters requesting justice?",
        "answer": "Chitai Temple."
    },
    {
        "id": 323,
        "question": "Which famous Mela (fair) is held at the Tapkeshwar Mahadev temple in Dehradun?",
        "answer": "Shivratri Mela."
    },
    {
        "id": 324,
        "question": "Which unique traditional ornament is worn tightly around the neck (like a choker) by rural women in Uttarakhand?",
        "answer": "Gulaband."
    },
    {
        "id": 325,
        "question": "What is \"Thadya\"?",
        "answer": "A traditional circle dance performed in the courtyards (Thad) of homes in Garhwal."
    },
    {
        "id": 326,
        "question": "What is \"Aipan\"?",
        "answer": "A traditional ritualistic folk art of Kumaon, made using a white paste of rice flour on a brick-red background."
    },
    {
        "id": 327,
        "question": "Where is the Uttarakhand Space Application Centre (USAC) located?",
        "answer": "Dehradun."
    },
    {
        "id": 328,
        "question": "In which city is the National Institute for the Empowerment of Persons with Visual Disabilities (formerly NIVH) located?",
        "answer": "Dehradun."
    },
    {
        "id": 329,
        "question": "Where is the Uttarakhand Tea Development Board headquartered?",
        "answer": "Almora."
    },
    {
        "id": 330,
        "question": "Which city hosts the Defence Agricultural Research Laboratory (DARL)?",
        "answer": "Pithoragarh."
    },
    {
        "id": 331,
        "question": "Who was the first Chief Information Commissioner of Uttarakhand?",
        "answer": "R.S. Tolia."
    },
    {
        "id": 332,
        "question": "Which operation was launched by the Indian Armed Forces to rescue stranded people during the devastating 2013 Kedarnath floods?",
        "answer": "Operation Surya Hope."
    },
    {
        "id": 333,
        "question": "What is the primary focus of the \"Vande Mataram Scheme\" launched by the Uttarakhand government?",
        "answer": "Providing free health check-ups and treatment for pregnant women."
    },
    {
        "id": 334,
        "question": "The proposed Jamrani Dam project, which is frequently in the news, is to be built on which river?",
        "answer": "Gola River (near Haldwani)."
    },
    {
        "id": 335,
        "question": "Where is the famous \"Neelkanth Mahadev\" temple situated?",
        "answer": "Pauri Garhwal district (often accessed via Rishikesh)."
    },
    {
        "id": 336,
        "question": "Where is the Indian Institute of Ayurveda for Drug Research located in Uttarakhand?",
        "answer": "Tarikhet (Almora)."
    },
    {
        "id": 337,
        "question": "Which breathtaking Himalayan peak in Uttarakhand is often referred to as the \"Matterhorn of Garhwal\"?",
        "answer": "Shivling Peak."
    },
    {
        "id": 338,
        "question": "What is the ancient and mythological name of Har-ki-Pauri in Haridwar?",
        "answer": "Brahmakund."
    },
    {
        "id": 339,
        "question": "Which tribal communities in Uttarakhand traditionally speak the \"Rongpa\" language?",
        "answer": "The Marchha and Tolchha (sub-groups of the Bhotia tribe)."
    },
    {
        "id": 340,
        "question": "Who was the first person to hoist the Indian tricolor in the Pauri Garhwal district in 1930?",
        "answer": "Jayanand Bharti."
    },
    {
        "id": 341,
        "question": "Which famous temple is located precisely at the confluence of the Gomati and Saryu rivers?",
        "answer": "Baijnath Temple."
    },
    {
        "id": 342,
        "question": "What is the name of the famous high-altitude zoo located in Nainital?",
        "answer": "Pt. G.B. Pant High Altitude Zoo."
    },
    {
        "id": 343,
        "question": "Which major river originates from the massive Milam Glacier?",
        "answer": "Goriganga River."
    },
    {
        "id": 344,
        "question": "What was the name of the secret society formed by Kalu Mahara (Uttarakhand's first freedom fighter) during the 1857 revolt?",
        "answer": "Krantiveer."
    },
    {
        "id": 345,
        "question": "In the traditional Kumaoni administrative structure, what was the role of a \"Padhan\"?",
        "answer": "The village headman responsible for local revenue collection and maintaining order."
    },
    {
        "id": 346,
        "question": "Who was the first recipient of the prestigious Sahitya Akademi Award for Hindi literature from Uttarakhand?",
        "answer": "Sumitranandan Pant (Note: He is famously a Jnanpith Award winner; Ruskin Bond won the Sahitya Akademi Award for English literature from the state)."
    },
    {
        "id": 347,
        "question": "Which river forms the natural boundary between Dehradun (Uttarakhand) and Sirmaur (Himachal Pradesh)?",
        "answer": "Tons River."
    },
    {
        "id": 348,
        "question": "At which exact location do the Tons and Yamuna rivers meet?",
        "answer": "Kalsi (Dakpathar)."
    },
    {
        "id": 349,
        "question": "Which mountain range in Uttarakhand is popularly known as the \"Pamir of Uttarakhand\"?",
        "answer": "Dudhatoli Range."
    },
    {
        "id": 350,
        "question": "The Dudhatoli Range spans across which three districts?",
        "answer": "Pauri, Chamoli, and Almora."
    },
    {
        "id": 351,
        "question": "Which specific Prayag (confluence) is formed by the meeting of the Alaknanda and Saraswati rivers?",
        "answer": "Keshav Prayag (near Mana village)."
    },
    {
        "id": 352,
        "question": "Where is the \"Bhim Pul,\" a massive natural rock bridge situated over the roaring Saraswati river, located?",
        "answer": "Mana Village (Chamoli)."
    },
    {
        "id": 353,
        "question": "Which famous Himalayan peak in Uttarakhand is shaped like a three-pronged spear?",
        "answer": "Trisul Peak."
    },
    {
        "id": 354,
        "question": "Which glacier is the primary source of the Pindar River?",
        "answer": "Pindari Glacier."
    },
    {
        "id": 355,
        "question": "The Kafni Glacier is located in which district?",
        "answer": "Bageshwar."
    },
    {
        "id": 356,
        "question": "What is the name of the bowl-shaped high-altitude lake situated near the Gangotri shrine?",
        "answer": "Kedar Tal."
    },
    {
        "id": 357,
        "question": "Which district is known as the \"Gateway to Yamunotri and Gangotri\"?",
        "answer": "Rishikesh is the gateway to the Char Dham, but Uttarkashi is the specific gateway district to these two shrines."
    },
    {
        "id": 358,
        "question": "What is the traditional name of the high-altitude trade route previously used by Bhotia merchants to travel to Tibet?",
        "answer": "Johar Valley (Salt Route)."
    },
    {
        "id": 359,
        "question": "Which major river originates from the eastern slopes of the Trisul massif and merges with the Alaknanda at Karnaprayag?",
        "answer": "Pindar River."
    },
    {
        "id": 360,
        "question": "The \"Main Boundary Thrust\" (MBT) separates which two geological regions in Uttarakhand?",
        "answer": "The Lesser (Middle) Himalayas and the Shivalik Range."
    },
    {
        "id": 361,
        "question": "Which district of Uttarakhand is entirely situated in the plains (Terai/Bhabar) with virtually no mountainous terrain?",
        "answer": "Udham Singh Nagar."
    },
    {
        "id": 362,
        "question": "Who was the reigning king of the Garhwal Kingdom during the devastating Gurkha invasion of 1804?",
        "answer": "King Pradyumna Shah."
    },
    {
        "id": 363,
        "question": "Who established the new Tehri Princely State in 1815 after the Gurkhas were defeated?",
        "answer": "King Sudarshan Shah."
    },
    {
        "id": 364,
        "question": "Who were the two British commanding officers who successfully led the Anglo-Nepalese war in Kumaon?",
        "answer": "Colonel William Linnaeus Gardner and Major Hearsey."
    },
    {
        "id": 365,
        "question": "In which year did the Kumaon Parishad officially merge with the Indian National Congress?",
        "answer": "1926."
    },
    {
        "id": 366,
        "question": "The historic \"Dola-Palki\" movement in Uttarakhand fought against what social injustice?",
        "answer": "The denial of the right of the Shilpkar (Dalit) community to use palanquins (dola-palki) during weddings."
    },
    {
        "id": 367,
        "question": "Who was the prominent leader and driving force behind the Dola-Palki movement?",
        "answer": "Jayanand Bharti."
    },
    {
        "id": 368,
        "question": "What was the ancient, historical name of the modern city of Kashipur?",
        "answer": "Govishan."
    },
    {
        "id": 369,
        "question": "The important archaeological and historical site of Purola is located in the valley of which river?",
        "answer": "Kamal River."
    },
    {
        "id": 370,
        "question": "Which famous newspaper was started from Dehradun in 1905 to awaken the social and political consciousness of the Garhwal region?",
        "answer": "Garhwali."
    },
    {
        "id": 371,
        "question": "Who was the author of the essential historical text \"Garhwal Ka Itihas\"?",
        "answer": "Hari Krishna Raturi."
    },
    {
        "id": 372,
        "question": "Who was the founder of the Katyuri dynasty, the first historical empire of Uttarakhand?",
        "answer": "Basant Dev."
    },
    {
        "id": 373,
        "question": "What was the original capital of the Katyuri dynasty before they shifted to Kartikeyapura (Baijnath)?",
        "answer": "Joshimath."
    },
    {
        "id": 374,
        "question": "Which prominent freedom fighter from Uttarakhand went on to serve as the Home Minister of India?",
        "answer": "Govind Ballabh Pant."
    },
    {
        "id": 375,
        "question": "Who founded the \"Himalayan Institute Hospital Trust\" (HIHT) at Jolly Grant?",
        "answer": "Swami Rama."
    },
    {
        "id": 376,
        "question": "In which year did the famous Chipko Movement receive the prestigious Right Livelihood Award (Alternative Nobel)?",
        "answer": "1987."
    },
    {
        "id": 377,
        "question": "Which major Kumaoni festival is strictly associated with agriculture, the planting of saplings, and the onset of the monsoon?",
        "answer": "Harela."
    },
    {
        "id": 378,
        "question": "Which traditional festival is celebrated on the very first day of the Hindu month of Chaitra (mid-March) to welcome spring?",
        "answer": "Phool Dei."
    },
    {
        "id": 379,
        "question": "What is the primary spiritual purpose of the \"Jagar\" tradition in Uttarakhand?",
        "answer": "To awaken and invoke local deities or ancestral spirits to seek their blessings or solutions to problems."
    },
    {
        "id": 380,
        "question": "Which two traditional musical instruments are essential during a Jagar performance?",
        "answer": "Dhol and Damau (often accompanied by a Hurka)."
    },
    {
        "id": 381,
        "question": "The \"Jad\" community is a specific sub-tribe of the Bhotias living primarily in the Jad Ganga valley of which district?",
        "answer": "Uttarkashi."
    },
    {
        "id": 382,
        "question": "Which traditional Uttarakhandi sweet, especially popular during weddings, is made strictly from rice flour and jaggery?",
        "answer": "Arsa."
    },
    {
        "id": 383,
        "question": "What is a \"Nathuli\" in Uttarakhandi culture?",
        "answer": "A large, traditional gold ring worn on the nose by married women."
    },
    {
        "id": 384,
        "question": "The four-horned ram, known locally as \"Chausingha Khadu,\" is a central, sacred figure in which major pilgrimage?",
        "answer": "Nanda Devi Raj Jat Yatra."
    },
    {
        "id": 385,
        "question": "In which specific fair do locals partake in the \"Bagwal\"\u2014a tradition of throwing stones at each other using massive wooden shields?",
        "answer": "Devidhura Mela (at the Varahi Devi temple)."
    },
    {
        "id": 386,
        "question": "Who was the renowned Kumaoni poet popularly known by the pen name \"Gumani Kavi\"?",
        "answer": "Lokratna Pant."
    },
    {
        "id": 387,
        "question": "Which famous Hindi poet from Kumaon won the Jnanpith Award for his collection \"Chidambara\"?",
        "answer": "Sumitranandan Pant."
    },
    {
        "id": 388,
        "question": "Which traditional Kumaoni festival marks the victory of the King of Kumaon over Garhwal and involves lighting massive bonfires?",
        "answer": "Khatarwa."
    },
    {
        "id": 389,
        "question": "Gaura Devi, the iconic environmentalist of the Chipko Movement, belonged to which specific village?",
        "answer": "Reni Village (Chamoli)."
    },
    {
        "id": 390,
        "question": "According to local legend, in which cave did Sage Vyasa dictate the Mahabharata to Lord Ganesha?",
        "answer": "Vyas Gufa (Mana Village)."
    },
    {
        "id": 391,
        "question": "What is the scientific name of the state flower, Brahma Kamal?",
        "answer": "Saussurea obvallata."
    },
    {
        "id": 392,
        "question": "In which year was the comprehensive Uttarakhand Panchayati Raj Act passed by the state assembly?",
        "answer": "2016."
    },
    {
        "id": 393,
        "question": "What percentage of seats are reserved for women in the Panchayati Raj Institutions (PRIs) of Uttarakhand?",
        "answer": "50%."
    },
    {
        "id": 394,
        "question": "What is the official term length of a Mayor in a Municipal Corporation (Nagar Nigam) in Uttarakhand?",
        "answer": "5 years."
    },
    {
        "id": 395,
        "question": "Who formally administers the oath of office to the Governor of Uttarakhand?",
        "answer": "The Chief Justice of the Uttarakhand High Court."
    },
    {
        "id": 396,
        "question": "How many total Development Blocks (Kshetra Panchayats) are there in the state of Uttarakhand?",
        "answer": "95."
    },
    {
        "id": 397,
        "question": "Who was the Chief Minister of Uttar Pradesh when the Uttarakhand statehood movement was at its peak in 1994 (during the Rampur Tiraha incident)?",
        "answer": "Mulayam Singh Yadav."
    },
    {
        "id": 398,
        "question": "Which article of the Indian Constitution was invoked by the Parliament to create the state of Uttarakhand?",
        "answer": "Article 3."
    },
    {
        "id": 399,
        "question": "Where is the headquarters of the Uttarakhand State Election Commission located?",
        "answer": "Dehradun."
    },
    {
        "id": 400,
        "question": "Which state government entity handles the generation of hydroelectric power in Uttarakhand?",
        "answer": "UJVNL (Uttarakhand Jal Vidyut Nigam Limited)."
    },
    {
        "id": 401,
        "question": "What is the total number of Zila Panchayats in Uttarakhand?",
        "answer": "13 (one for each district)."
    },
    {
        "id": 402,
        "question": "The Koteshwar Dam, a run-of-the-river power project, is built on which river?",
        "answer": "Bhagirathi River (downstream from the Tehri Dam)."
    },
    {
        "id": 403,
        "question": "Where is the massive manufacturing plant of Bharat Heavy Electricals Limited (BHEL) situated in Uttarakhand?",
        "answer": "Haridwar (Ranipur)."
    },
    {
        "id": 404,
        "question": "What was the primary objective of the \"Aarohi Project\" launched by the Uttarakhand government?",
        "answer": "To provide computer education and training to teachers and students in government schools."
    },
    {
        "id": 405,
        "question": "Where is the prestigious Indian Institute of Petroleum (IIP) located?",
        "answer": "Dehradun."
    },
    {
        "id": 406,
        "question": "Where is the National Institute of Hydrology (NIH) situated?",
        "answer": "Roorkee."
    },
    {
        "id": 407,
        "question": "\"Keeda Jadi\" (Yartsa Gunbu), a highly expensive high-altitude medicinal fungus, is biologically known as what?",
        "answer": "Cordyceps sinensis."
    },
    {
        "id": 408,
        "question": "In which year was the headquarters of the Survey of India shifted from Calcutta to Dehradun?",
        "answer": "1942 (during World War II)."
    },
    {
        "id": 409,
        "question": "Where is the Central Building Research Institute (CBRI), a premier constituent of CSIR, located?",
        "answer": "Roorkee."
    },
    {
        "id": 410,
        "question": "Which is the primary, busiest airport serving the Garhwal region of Uttarakhand?",
        "answer": "Jolly Grant Airport (Dehradun)."
    },
    {
        "id": 411,
        "question": "Which domestic airport is located near Haldwani to serve the Kumaon region?",
        "answer": "Pantnagar Airport."
    },
    {
        "id": 412,
        "question": "Where is the Naini Saini Airport situated?",
        "answer": "Pithoragarh."
    },
    {
        "id": 413,
        "question": "Which domestic airstrip is located in the Chamoli district and is frequently used during the Char Dham Yatra and rescue operations?",
        "answer": "Gauchar Airport."
    },
    {
        "id": 414,
        "question": "What is the designated National Highway number for the main route leading to Badrinath?",
        "answer": "NH-7."
    },
    {
        "id": 415,
        "question": "What is the designated National Highway number for the route leading to Kedarnath?",
        "answer": "NH-107."
    },
    {
        "id": 416,
        "question": "The massive infrastructure project to upgrade the roads connecting the four holy shrines is officially known as what?",
        "answer": "Char Dham Pariyojana (often referred to as the All-Weather Road Project)."
    },
    {
        "id": 417,
        "question": "Which National Park in Uttarakhand is particularly famous for its large population of wild Asian Elephants?",
        "answer": "Rajaji National Park."
    },
    {
        "id": 418,
        "question": "The \"Ardh Kumbh Mela\" in Haridwar is celebrated every how many years?",
        "answer": "6 years."
    },
    {
        "id": 419,
        "question": "The catastrophic 2021 Chamoli disaster, triggered by a rock and ice avalanche, primarily wiped out power projects on which two rivers?",
        "answer": "Rishi Ganga and Dhauliganga."
    },
    {
        "id": 420,
        "question": "At approximately what altitude range is the State Flower, Brahma Kamal, typically found growing in the Himalayas?",
        "answer": "3,000 to 4,800 meters."
    },
    {
        "id": 421,
        "question": "Where is the famous \"Vashistha Gufa\" (Cave), an ancient meditation site, located?",
        "answer": "On the banks of the Ganga near Rishikesh (Tehri Garhwal district)."
    },
    {
        "id": 422,
        "question": "What was the official mascot of the 38th National Games, which were slated to be hosted by Uttarakhand?",
        "answer": "Monal (the State Bird)."
    },
    {
        "id": 423,
        "question": "Which town in Uttarakhand is famously associated with the production of high-quality cricket bats made from locally sourced willow?",
        "answer": "Dehradun."
    },
    {
        "id": 424,
        "question": "Who is the current sitting Chief Minister of Uttarakhand?",
        "answer": "(Pushkar Singh Dhami - Note: Always double-check this before your exam as political positions change!)"
    },
    {
        "id": 425,
        "question": "Which specific region in Uttarakhand is famous for the cultivation of \"Munshyari Rajma,\" which recently received a GI Tag?",
        "answer": "Munsiyari (Pithoragarh)."
    },
    {
        "id": 426,
        "question": "Which indigenous breed of hill cattle from Uttarakhand was recognized as India\u2019s first registered cattle breed from the state?",
        "answer": "Badri Cow."
    },
    {
        "id": 427,
        "question": "Which town is known as the \"City of Lakes\" in Uttarakhand?",
        "answer": "Nainital."
    },
    {
        "id": 428,
        "question": "Which town in Pithoragarh is often called the \"Kashmir of Uttarakhand\" due to its stunning valleys?",
        "answer": "Munsiyari."
    },
    {
        "id": 429,
        "question": "Where is the famous Dronasagar Lake, associated with Guru Dronacharya of the Mahabharata, located?",
        "answer": "Kashipur (Udham Singh Nagar)."
    },
    {
        "id": 430,
        "question": "Which place is famously known as the \"Apple Bowl of Uttarakhand\"?",
        "answer": "Harsil (Uttarkashi)."
    },
    {
        "id": 431,
        "question": "The ancient Bagnath Temple, dedicated to Lord Shiva, is situated in which district?",
        "answer": "Bageshwar."
    },
    {
        "id": 432,
        "question": "Which specific bridge in Rishikesh is an iconic iron suspension bridge built over the Ganges in 1929?",
        "answer": "Lakshman Jhula."
    },
    {
        "id": 433,
        "question": "Which town serves as the starting point for the famous trek to the Valley of Flowers and Hemkund Sahib?",
        "answer": "Govindghat."
    },
    {
        "id": 434,
        "question": "The prominent tourist destination of \"Auli,\" known for skiing and winter sports, is located in which district?",
        "answer": "Chamoli."
    },
    {
        "id": 435,
        "question": "Which town in Tehri Garhwal was originally built by King Narendra Shah and is known for its high rainfall?",
        "answer": "Narendra Nagar."
    },
    {
        "id": 436,
        "question": "Which ancient temple complex in the Almora district is surrounded by massive Deodar trees and houses 124 distinct stone shrines?",
        "answer": "Jageshwar Dham."
    },
    {
        "id": 437,
        "question": "What is the female literacy rate of Uttarakhand according to the 2011 Census?",
        "answer": "Approximately 70.70%."
    },
    {
        "id": 438,
        "question": "Which district of Uttarakhand has the lowest female literacy rate?",
        "answer": "Uttarkashi."
    },
    {
        "id": 439,
        "question": "Which district has the highest male literacy rate?",
        "answer": "Rudraprayag."
    },
    {
        "id": 440,
        "question": "Which university in Uttarakhand was granted the status of a \"Central University\" in 2009?",
        "answer": "Hemvati Nandan Bahuguna Garhwal University (HNBGU)."
    },
    {
        "id": 441,
        "question": "Where is the Doon University, established by the state government, located?",
        "answer": "Dehradun."
    },
    {
        "id": 442,
        "question": "Which town is home to the prestigious St. Joseph's College (often called \"Plumstead\") and Sherwood College?",
        "answer": "Nainital."
    },
    {
        "id": 443,
        "question": "Where is the Uttarakhand Board of School Education (UBSE) headquartered?",
        "answer": "Ramnagar (Nainital)."
    },
    {
        "id": 444,
        "question": "In which year was the Indian Institute of Technology (IIT) Roorkee officially elevated from the University of Roorkee to an IIT?",
        "answer": "2001."
    },
    {
        "id": 445,
        "question": "Which prominent medical institute in Uttarakhand was established under the Pradhan Mantri Swasthya Suraksha Yojana (PMSSY)?",
        "answer": "AIIMS Rishikesh."
    },
    {
        "id": 446,
        "question": "What is the official motto of the Lal Bahadur Shastri National Academy of Administration (LBSNAA) located in Mussoorie?",
        "answer": "Sheelam Param Bhushanam (Character is the highest virtue)."
    }
];
