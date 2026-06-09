import json, re

text = open('questions_upsc.js', encoding='utf-8').read()
data = json.loads(re.sub(r'^const questions_upsc = ', '', text).rstrip(';\n'))

extra_polity = [
    {"question": "Which article of Indian Constitution guarantees freedom of speech?", "answer": "Article 19(1)(a)"},
    {"question": "The Parliament of India has the power to legislate on subjects in the?", "answer": "Union List and Concurrent List"},
    {"question": "Which article defines the concept of 'secular state' in India?", "answer": "The Preamble (with Articles 25-28)"},
    {"question": "The National Emergency under Article 352 was first invoked in?", "answer": "1962 (India-China war)"},
    {"question": "Which body approves the budget in India?", "answer": "Parliament"},
    {"question": "The President of India is elected for a term of?", "answer": "5 years"},
    {"question": "Which article of the Indian Constitution prohibits forced labour?", "answer": "Article 23"},
    {"question": "The 'Right to Strike' in India is?", "answer": "Not a Fundamental Right but a legal right in specific circumstances"},
    {"question": "Which schedule of the Indian Constitution lists anti-defection provisions?", "answer": "Tenth Schedule"},
    {"question": "The National Human Rights Commission can investigate violations that occurred within?", "answer": "One year of occurrence"},
    {"question": "Under which article is 'Public Interest Litigation' (PIL) filed?", "answer": "Article 32 (Supreme Court) or 226 (High Court)"},
    {"question": "The Rajya Sabha is also called the 'House of Elders' because?", "answer": "It represents states and is not directly elected by the public"},
    {"question": "Which article empowers Parliament to restrict fundamental rights during emergencies?", "answer": "Article 358 and 359"},
    {"question": "The concept of 'Independent Judiciary' in India means?", "answer": "The judiciary can function without interference from legislature or executive"},
    {"question": "Which article provides for the establishment of a supreme court?", "answer": "Article 124"},
    {"question": "The 'Star Wars' program relates to?", "answer": "US Strategic Defense Initiative"},
    {"question": "The National Commission for Women was set up in?", "answer": "1992"},
    {"question": "Which chapter of the Indian Constitution deals with Directive Principles?", "answer": "Part IV"},
    {"question": "Which part of Indian Constitution is called the 'Magna Carta' of India?", "answer": "Part III (Fundamental Rights)"},
    {"question": "The Atal Pension Yojana was launched in?", "answer": "2015"},
    {"question": "Which article provides for 'Freedom of Conscience and Free Profession, Practice and Propagation of Religion'?", "answer": "Article 25"},
    {"question": "Which article of Indian Constitution prohibits employment of children in factories?", "answer": "Article 24"},
    {"question": "The Prevention of Atrocities Act, 1989 is for the protection of?", "answer": "Scheduled Castes and Scheduled Tribes"},
    {"question": "The Indian Parliament meets for at least how many sessions per year?", "answer": "Minimum 2 sessions"},
    {"question": "Who administers oath of office to the Chief Minister?", "answer": "Governor"},
    {"question": "Which body regulates the conduct of Members of Parliament?", "answer": "Parliament itself through its rules and Speaker"},
    {"question": "The 'Triple Talaq' was declared unconstitutional by Supreme Court in?", "answer": "2017"},
    {"question": "The Speaker of Lok Sabha cannot vote in ordinary circumstances but can cast a?", "answer": "Casting vote in case of a tie"},
    {"question": "The Judges of the Supreme Court retire at the age of?", "answer": "65 years"},
    {"question": "The concept of 'Separation of Church and State' in Indian context means?", "answer": "India is a secular state with no official religion"},
    {"question": "Which body has power to interpret the Constitution?", "answer": "Supreme Court of India"},
    {"question": "What is the MGNREGA scheme related to?", "answer": "Guaranteed 100 days of wage employment in rural areas"},
    {"question": "The Gram Nyayalayas Act was passed in?", "answer": "2008"},
    {"question": "The Anti-Corruption Bureau is a department of?", "answer": "State Government"},
    {"question": "Which is the most powerful committee of Parliament?", "answer": "Public Accounts Committee (PAC)"},
    {"question": "The 'Whistleblower Protection Act' in India was passed in?", "answer": "2014"},
    {"question": "Which Article of India's Constitution provides for special provisions for minorities?", "answer": "Article 29 and 30"},
    {"question": "The concept of 'Ombudsman' originated in which country?", "answer": "Sweden"},
    {"question": "The Advocate General of a State is equivalent to the Attorney General at?", "answer": "State level"},
    {"question": "Under which article of the Indian Constitution can the President issue an ordinance?", "answer": "Article 123"},
    {"question": "Which body verifies the election accounts of political parties?", "answer": "Election Commission of India"},
    {"question": "The 'Model Code of Conduct' issued by the Election Commission is?", "answer": "Not legally binding but conventionally followed"},
    {"question": "The Scheduled Castes and Scheduled Tribes lists are included in?", "answer": "The Constitution through specific orders"},
    {"question": "Which constitutional provision deals with the appointment of the Finance Commission?", "answer": "Article 280"},
    {"question": "The National Judicial Appointments Commission (NJAC) was struck down in?", "answer": "2015"},
    {"question": "Which article of the Indian Constitution relates to the control of Parliament over finance?", "answer": "Article 112–117"},
    {"question": "Who among the following has the exclusive jurisdiction over election disputes?", "answer": "High Courts"},
    {"question": "The National Scheduled Castes Finance and Development Corporation is under which ministry?", "answer": "Ministry of Social Justice and Empowerment"},
    {"question": "The concept of 'Proportional Representation' by means of single transferable vote is used for election of?", "answer": "President, Vice President, Rajya Sabha members"},
    {"question": "The President of India is part of which branch of government?", "answer": "Executive"},
    {"question": "Which article authorizes Parliament to exclude certain offences from protection under Article 20?", "answer": "Article 20 itself provides absolute protection"},
    {"question": "What is the significance of 26th January in India?", "answer": "Republic Day - Constitution came into force"},
    {"question": "Which amendment increased the period of Presidential Rule to one year?", "answer": "42nd Amendment"},
    {"question": "The 'Right to Information' enables citizens to?", "answer": "Access government-held information"},
    {"question": "The Council of Ministers in India collectively responsible to?", "answer": "Lok Sabha"},
    {"question": "The 'Three Tier' system of Panchayati Raj consists of?", "answer": "Gram Panchayat, Panchayat Samiti, Zila Parishad"},
    {"question": "Which article enables a State to have concurrent powers with the Union?", "answer": "Article 246 (Concurrent List)"},
    {"question": "The 'Political Parties Recognition' is governed by?", "answer": "Representation of the People Act and ECI's guidelines"},
    {"question": "The National Law University was established first in?", "answer": "Bangalore, 1987"},
    {"question": "Which constitutional provision allows Parliament to resolve intergovernmental disputes?", "answer": "Article 262"},
    {"question": "The Scheduled Areas in India are areas having predominantly?", "answer": "Tribal populations"},
    {"question": "Under which article does the President address both Houses of Parliament?", "answer": "Article 87"},
    {"question": "The Right to Life and Personal Liberty under Article 21 includes?", "answer": "Right to livelihood, education, dignity, etc."},
    {"question": "The Gram Sabhas are strengthened by which act?", "answer": "PESA Act, 1996"},
    {"question": "Which Schedule of the Constitution contains the forms of oaths for constitutional office-holders?", "answer": "Third Schedule"},
    {"question": "The 'No Confidence Motion' requires how many members to move it in Lok Sabha?", "answer": "50 members"},
    {"question": "The 'Zero Hour' in Indian Parliament begins at?", "answer": "12 noon"},
    {"question": "Which article provides for freedom to manage religious affairs?", "answer": "Article 26"},
    {"question": "The National Advisory Council was first established in?", "answer": "2004"},
    {"question": "Which amendment made Delhi a National Capital Territory?", "answer": "69th Amendment"},
    {"question": "The National Commission for Minorities was established in?", "answer": "1993"},
    {"question": "Right to Education became a Fundamental Right by the?", "answer": "86th Amendment"},
    {"question": "The Delimitation Commission is constituted by?", "answer": "President under a Delimitation Act"},
    {"question": "The Constituent Assembly of India was set up in?", "answer": "1946"},
    {"question": "Which document guided the drafting of the Indian Constitution?", "answer": "Cabinet Mission Plan and Mountbatten Plan"},
]

existing_polity = data['polity']
existing_polity_strs = {q['question'] for q in existing_polity}
needed = 500 - len(existing_polity)

for q in extra_polity:
    if needed <= 0:
        break
    if q['question'] not in existing_polity_strs:
        existing_polity.append({"id": len(existing_polity)+1, "question": q['question'], "answer": q['answer']})
        existing_polity_strs.add(q['question'])
        needed -= 1

data['polity'] = existing_polity

for topic, qs in data.items():
    print(f"{topic}: {len(qs)} questions")

js = f"const questions_upsc = {json.dumps(data, indent=2)};\n"
open('questions_upsc.js', 'w', encoding='utf-8').write(js)
print("Done! All topics should now have 500 questions.")
