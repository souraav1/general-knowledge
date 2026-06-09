import json
import re

# Read the English questions file
with open('questions_gemini.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Manual translation dictionary for key terms and common phrases
hindi_translations = {
    # Uttarakhand GK translations
    "When was Uttarakhand carved out of Uttar Pradesh to become a separate state": "उत्तराखंड को कब उत्तर प्रदेश से अलग करके एक अलग राज्य बनाया गया था",
    "November 9, 2000.": "9 नवंबर, 2000।",
    "What are the official capitals of Uttarakhand": "उत्तराखंड की आधिकारिक राजधानियाँ क्या हैं",
    "Dehradun (Winter) and Gairsain (Summer).": "देहरादून (सर्दी) और गैरसैन (गर्मी)।",
    "What is the total geographical area of Uttarakhand": "उत्तराखंड का कुल भौगोलिक क्षेत्र कितना है",
    "53,483 sq. km.": "53,483 वर्ग किमी।",
    "How many administrative districts does Uttarakhand have": "उत्तराखंड में कितने प्रशासनिक जिले हैं",
    "13 districts (divided into Garhwal and Kumaon divisions).": "13 जिले (गढ़वाल और कुमाऊँ विभागों में विभाजित)।",
    "Which is the largest district in Uttarakhand by area": "क्षेत्रफल के हिसाब से उत्तराखंड का सबसे बड़ा जिला कौन सा है",
    "Chamoli.": "चमोली।",
    "Which is the smallest district in Uttarakhand by area": "क्षेत्रफल के हिसाब से उत्तराखंड का सबसे छोटा जिला कौन सा है",
    "Champawat.": "चंपावत।",
    "Which Indian states share borders with Uttarakhand": "कौन से भारतीय राज्य उत्तराखंड की सीमा साझा करते हैं",
    "Himachal Pradesh (North-West) and Uttar Pradesh (South).": "हिमाचल प्रदेश (उत्तर-पश्चिम) और उत्तर प्रदेश (दक्षिण)।",
    "Which international borders does the state share": "राज्य की अंतर्राष्ट्रीय सीमाएं कहाँ हैं",
    "Nepal (East) and Tibet/China (North).": "नेपाल (पूर्व) और तिब्बत/चीन (उत्तर)।",
    "Which is the highest mountain peak in Uttarakhand": "उत्तराखंड की सबसे ऊँची पर्वत चोटी कौन सी है",
    "Nanda Devi (7,816 meters).": "नंदा देवी (7,816 मीटर)।",
    "At which exact place do the Bhagirathi and Alaknanda rivers meet to form the Ganga": "भागीरथी और अलकनंदा नदियाँ किस स्थान पर मिलकर गंगा बनाती हैं",
    "Devprayag.": "देवप्रयाग।",
    "Where does the Alaknanda River originate": "अलकनंदा नदी की उत्पत्ति कहाँ से होती है",
    "Satopanth Glacier.": "सतोपंथ ग्लेशियर।",
    "Where does the Bhagirathi River originate": "भागीरथी नदी की उत्पत्ति कहाँ से होती है",
    "Gaumukh (Gangotri Glacier).": "गौमुख (गंगोत्री ग्लेशियर)।",
    "Which river forms the natural eastern boundary between Uttarakhand and Nepal": "कौन सी नदी उत्तराखंड और नेपाल के बीच प्राकृतिक पूर्वी सीमा बनाती है",
    "Sharda (Kali) River.": "शारदा (काली) नदी।",
    "Which river is primarily responsible for forming the Doon Valley": "कौन सी नदी मुख्य रूप से दून घाटी के गठन के लिए जिम्मेदार है",
    "Song River (along with Asan and Suswa).": "गीता नदी (असन और सुस्वा के साथ)।",
    "Which lake in Uttarakhand is famous as the \"Mystery Lake\" or \"Skeleton Lake\"": "उत्तराखंड की कौन सी झील \"रहस्य झील\" या \"कंकाल झील\" के रूप में प्रसिद्ध है",
    "Roopkund Lake.": "रूपकुंड झील।",
    "Which district is known as the \"Lake District of India\"": "कौन सा जिला भारत की \"झील जिला\" के रूप में जाना जाता है",
    "Nainital.": "नैनीताल।",
}

# Function to translate using the dictionary (fallback to basic transliteration)
def translate_text(text):
    if text in hindi_translations:
        return hindi_translations[text]
    # If not in dictionary, return original for now
    return text

# Read and parse the JavaScript file
output = "// Gemini.txt से Uttarakhand GK क्विज - हिंदी संस्करण\n"
output += "// Topics: उत्तराखंड जीके, भारत जीके, इतिहास, भूगोल, राजनीति, अर्थव्यवस्था और विज्ञान\n\n"

# Extract the structure and create Hindi version
lines = content.split('\n')
in_array = False
current_topic = ""

for line in lines:
    if '"ukgk"' in line or '"india_gk"' in line or '"history"' in line or '"geography"' in line or '"polity"' in line or '"economy_science"' in line:
        in_array = True
        output += line + "\n"
    elif line.strip().startswith('"question"'):
        # Extract and translate question
        match = re.search(r'"question":\s*"(.+?)"', line)
        if match:
            eng_question = match.group(1)
            hindi_question = translate_text(eng_question)
            output += f'      "question": "{hindi_question}",\n'
    elif line.strip().startswith('"answer"'):
        # Extract and translate answer
        match = re.search(r'"answer":\s*"(.+?)"', line)
        if match:
            eng_answer = match.group(1)
            hindi_answer = translate_text(eng_answer)
            output += f'      "answer": "{hindi_answer}"\n'
    else:
        output += line + "\n"

# Save the Hindi version
with open('questions_gemini_hi.js', 'w', encoding='utf-8') as f:
    f.write(output)

print("Hindi translation started. Note: Complete translation requires a comprehensive dictionary or API.")
print("Created: questions_gemini_hi.js")
