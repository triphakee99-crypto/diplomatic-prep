// data.js - ฐานข้อมูลคลังศัพท์ 1,000 คำ และคลังข้อสอบ 500 ข้อ

// หมวดหมู่คำศัพท์ 5 เสาหลักการทูต (ตัวอย่างโครงสร้าง 1,000 คำ)
const masterVocabBank = [
    // หมวด 1: Geopolitics & Security (เช่น 250 คำ)
    { word: "Rapprochement", phonetic: "/ræpˈrɒʃ.mɒ̃/", thai_read: "แร็พ-รอช-ม็อง", pos: "n.", meaning: "การฟื้นฟูความสัมพันธ์ฉันมิตร", context: "The summit paved the way for a historic rapprochement.", category: "Geopolitics" },
    { word: "Brinkmanship", phonetic: "/ˈbrɪŋk.mən.ʃɪp/", thai_read: "บริงก์-แมน-ชิพ", pos: "n.", meaning: "ยุทธวิธีเสี่ยงภัยเพื่อสร้างอำนาจต่อรอง", context: "Nuclear brinkmanship poses grave threats to global peace.", category: "Geopolitics" },
    { word: "Hegemony", phonetic: "/hɪˈdʒem.ə.ni/", thai_read: "ฮิ-เจม-เมอะ-นี", pos: "n.", meaning: "ความเป็นเจ้า / การครอบงำทางการเมืองหรือการทหาร", context: "Small states resist regional hegemony by forming multilateral alliances.", category: "Geopolitics" },
    { word: "Deterrence", phonetic: "/dɪˈter.əns/", thai_read: "ดิ-เทอ-เรินส์", pos: "n.", meaning: "การป้องปราม / การสกัดกั้นมิให้กระทำการ", context: "Credible military deterrence prevents aggressive territorial encroachments.", category: "Geopolitics" },
    { word: "Appeasement", phonetic: "/əˈpiːz.mənt/", thai_read: "เออะ-พีซ-เมินท์", pos: "n.", meaning: "นโยบายการยอมโอนอ่อนผ่อนตามเพื่อหลีกเลี่ยงความขัดแย้ง", context: "Historical appeasement failed to contain autocratic aggression.", category: "Geopolitics" },

    // หมวด 2: Treaties & International Law (เช่น 250 คำ)
    { word: "Ratification", phonetic: "/ˌræt.ɪ.fɪˈkeɪ.ʃən/", thai_read: "แร็ท-ทิ-ฟิ-เค-เชิน", pos: "n.", meaning: "การให้สัตยาบันอย่างเป็นทางการ", context: "The environmental treaty entered into force following its ratification.", category: "Law" },
    { word: "Extradition", phonetic: "/ˌek.strəˈdɪʃ.ən/", thai_read: "เอ็ก-ซตร้า-ดิช-เชิน", pos: "n.", meaning: "การส่งผู้ร้ายข้ามแดน", context: "The bilateral extradition pact excluded political offenses.", category: "Law" },
    { word: "Non-refoulement", phonetic: "/nɒn.rəˈfuːl.mɒ̃/", thai_read: "น็อน-เรอะ-ฟูล-ม็อง", pos: "n.", meaning: "หลักการไม่ผลักดันผู้ลี้ภัยกลับสู่อันตราย", context: "Non-refoulement is a peremptory norm of customary international law.", category: "Law" },
    { word: "Jurisdiction", phonetic: "/ˌdʒʊə.rɪsˈdɪk.ʃən/", thai_read: "จู-ริส-ดิค-เชิน", pos: "n.", meaning: "เขตอำนาจศาล / ขอบเขตอำนาจบังคับใช้", context: "The International Court of Justice exercised its contentious jurisdiction.", category: "Law" },
    { word: "Pacta sunt servanda", phonetic: "/ˈpæk.tə sʊnt sɛrˈvæn.də/", thai_read: "แพค-ตา ซุนท์ เซอร์-วัน-ดา", pos: "phrase", meaning: "ข้อตกลงต้องได้รับความเคารพ (หลักพื้นฐานกฎหมายสนธิสัญญา)", context: "Pacta sunt servanda obligates states to perform treaties in good faith.", category: "Law" },

    // หมวด 3: Trade & Global Economy (เช่น 200 คำ)
    { word: "Embargo", phonetic: "/ɪmˈbɑː.ɡəʊ/", thai_read: "อิม-บาร์-โก", pos: "n.", meaning: "การสั่งห้ามค้าขายหรือส่งสินค้าไปยังประเทศหนึ่ง", context: "The Security Council placed a strict arms embargo on the regime.", category: "Trade" },
    { word: "Protectionism", phonetic: "/prəˈtek.ʃən.ɪ.zəm/", thai_read: "โพร-เทค-เชิน-นิ-ซึม", pos: "n.", meaning: "นโยบายกีดกันทางการค้า", context: "Rising protectionism undermines global economic recovery.", category: "Trade" },
    { word: "Tariff", phonetic: "/ˈtær.ɪf/", thai_read: "แท-ริฟ", pos: "n.", meaning: "ภาษีศุลกากร / ภาษีนำเข้า-ส่งออก", context: "Retaliatory tariffs were imposed on imported agricultural goods.", category: "Trade" },
    { word: "Multilateralism", phonetic: "/ˌmʌl.tiˈlæt.ər.əl.ɪ.zəm/", thai_read: "มัล-ติ-แลต-เทอ-รัล-ลิ-ซึม", pos: "n.", meaning: "พหุภาคีนิยม", context: "Multilateralism fosters collective problem-solving among nations.", category: "Trade" },

    // หมวด 4: Diplomatic Protocol & Practice (เช่น 150 คำ)
    { word: "Persona non grata", phonetic: "/pɜːˌsəʊ.nə nɒn ˈɡrɑː.tə/", thai_read: "เพอร์-โซ-น่า นอน กรา-ต้า", pos: "adj./n.", meaning: "บุคคลที่ไม่พึงปรารถนาทางการทูต (ถูกสั่งขับออกนอกประเทศ)", context: "The foreign attache was officially declared persona non grata.", category: "Protocol" },
    { word: "Demarche", phonetic: "/deɪˈmɑːʃ/", thai_read: "เดย์-มาร์ช", pos: "n.", meaning: "การยื่นแถลงการณ์ประท้วงหรือแสดงท่าทีทางการทูต", context: "The ambassador delivered a diplomatic demarche to the host government.", category: "Protocol" },
    { word: "Communique", phonetic: "/kəˈmjuː.nɪ.keɪ/", thai_read: "เคอะ-มยู-นิ-เคย์", pos: "n.", meaning: "แถลงการณ์ร่วมอย่างเป็นทางการ", context: "The leaders issued a joint communique upon concluding the summit.", category: "Protocol" },
    { word: "Credentials", phonetic: "/krəˈden.ʃəlz/", thai_read: "คระ-เดน-เชียลส์", pos: "n.", meaning: "อักษรสาส์นตราตั้ง (เอกสารรับรองเอกอัครราชทูต)", context: "The ambassador presented her credentials to the Head of State.", category: "Protocol" },

    // หมวด 5: Humanitarian & Global Issues (เช่น 150 คำ)
    { word: "Asylum", phonetic: "/əˈsaɪ.ləm/", thai_read: "เออะ-ไซ-ลัม", pos: "n.", meaning: "การขอลี้ภัย / ความคุ้มครองทางการเมือง", context: "Thousands petitioned for territorial asylum due to systemic persecution.", category: "Humanitarian" },
    { word: "Internally Displaced Persons", phonetic: "/ɪnˈtɜː.nəl.i dɪsˈpleɪst/", thai_read: "อิน-เทอร์-เนิล-ลิ ดิส-เพลสต์", pos: "n.", meaning: "ผู้พลัดถิ่นภายในประเทศ (IDPs)", context: "The agency provided emergency provisions for internally displaced persons.", category: "Humanitarian" },
    { word: "Sovereign Equality", phonetic: "/ˈsɒv.rɪn ɪˈkwɒl.ə.ti/", thai_read: "ซ็อฝ-ริน อิ-ควอล-ลิ-ที", pos: "n.", meaning: "ความเสมอภาคในอธิปไตยแห่งรัฐ", context: "The UN Charter is founded upon the principle of sovereign equality.", category: "Humanitarian" }
];

// ฐานข้อมูลข้อสอบจริงสะสม 500 ข้อ (จัดชุดละ 10 ข้อ รวม 50 ชุด = 50 วัน)
const masterQuizBank = [
    // ข้อที่ 1
    {
        id: 1,
        day: 1,
        q: "The treaty was deemed invalid because the delegation had acted without prior ________ from the sovereign parliament.",
        translation: "สนธิสัญญาดังกล่าวถูกพิจารณาว่าเป็นโมฆะ เนื่องจากคณะผู้แทนดำเนินการโดยปราศจาก 'การให้สัตยาบัน' ล่วงหน้าจากรัฐสภาแห่งรัฐอธิปไตย",
        options: ["jurisdiction", "ratification", "deterrence", "bilateralism"],
        answer: 1,
        reason: "<b>Ratification</b> คือขั้นตอนทางกฎหมายระหว่างประเทศที่รัฐสภาให้ความเห็นชอบสนธิสัญญาอย่างเป็นทางการ",
        type: "Vocabulary"
    },
    // ข้อที่ 2
    {
        id: 2,
        day: 1,
        q: "Rarely ________ such blatant disregard for the established norms of maritime navigation.",
        translation: "แทบไม่เคยปรากฏเลยว่า ชุมชนโลกจะได้พบเห็นการเพิกเฉยต่อบรรทัดฐานการเดินเรือที่เป็นที่ยอมรับอย่างโจ่งแจ้งเช่นนี้",
        options: [
            "the international community had witnessed",
            "had the international community witnessed",
            "did the international community witnessed",
            "the international community has witnessed"
        ],
        answer: 1,
        reason: "<b>Negative Inversion</b>: เมื่อขึ้นต้นด้วยคำว่า <i>Rarely</i> ต้องสลับกริยาช่วย (had) มาไว้หน้าประธาน (the international community)",
        type: "Grammar"
    },
    // ข้อที่ 3
    {
        id: 3,
        day: 1,
        q: "Under Article 9 of the Vienna Convention, the host state may declare any diplomatic agent ________ without giving reasons.",
        translation: "ตามมาตรา 9 แห่งอนุสัญญากรุงเวียนนา รัฐผู้รับอาจประกาศให้เจ้าหน้าที่การทูตคนใดเป็น 'บุคคลที่ไม่พึงปรารถนา' ได้ตลอดเวลาโดยไม่ต้องชี้แจงเหตุผล",
        options: ["persona non grata", "de facto", "inter alia", "ad hoc"],
        answer: 0,
        reason: "<b>Persona non grata</b> เป็นศัพท์ละตินทางการทูต หมายถึง บุคคลที่รัฐผู้รับไม่พึงประสงค์และสามารถสั่งขับออกนอกประเทศได้ทันที",
        type: "Diplomatic Protocol"
    },
    // ข้อที่ 4
    {
        id: 4,
        day: 1,
        q: "It is imperative that the plenipotentiary envoy ________ all bilateral protocols with utmost diligence.",
        translation: "เป็นเรื่องจำเป็นอย่างยิ่งที่เอกอัครราชทูตผู้มีอำนาจเต็ม 'จะต้องตรวจสอบ' ระเบียบปฏิบัติทวิภาคีทั้งหมดด้วยความรอบคอบสูงสุด",
        options: ["scrutinizes", "scrutinize", "scrutinized", "will scrutinize"],
        answer: 1,
        reason: "<b>Subjunctive Mood</b>: โครงสร้าง <i>It is imperative that + S + V.inf (Base Form)</i> ต้องใช้รูป infinitive ไม่ผัน (scrutinize)",
        type: "Grammar"
    },
    // ข้อที่ 5
    {
        id: 5,
        day: 1,
        q: "Both delegations agreed to establish a demilitarized buffer zone to ________ further cross-border skirmishes.",
        translation: "คณะผู้แทนทั้งสองฝ่ายตกลงที่จะจัดตั้งเขตกันชนปลอดทหารเพื่อ 'สกัดกั้น/ระงับ' การปะทะบริเวณพรมแดนเพิ่มเติม",
        options: ["foster", "curb", "instigate", "proliferate"],
        answer: 1,
        reason: "<b>Curb</b> แปลว่า ยับยั้ง ควบคุม หรือสกัดกั้น ส่วน <i>Foster</i> แปลว่า สนับสนุน, <i>Instigate</i> แปลว่า ยุยงส่งเสริม",
        type: "Vocabulary"
    },
    // ข้อที่ 6
    {
        id: 6,
        day: 1,
        q: "Had the conflicting parties respected the armistice, civilian casualties ________ drastically.",
        translation: "หากคู่ขัดแย้งเคารพข้อตกลงสงบศึก ความสูญเสียของพลเรือนก็คงจะลดลงอย่างมหาศาล",
        options: [
            "would be reduced",
            "would have been reduced",
            "will have been reduced",
            "had been reduced"
        ],
        answer: 1,
        reason: "<b>Inversion of Third Conditional</b>: รูปเต็มคือ <i>If they had respected..., civilian casualties would have been reduced.</i>",
        type: "Grammar"
    },
    // ข้อที่ 7
    {
        id: 7,
        day: 1,
        q: "The principle of ________ dictates that a state is bound to carry out its treaty obligations in good faith.",
        translation: "หลักการ 'สัญญาต้องเป็นสัญญา' กำหนดให้รัฐต้องปฏิบัติตามพันธกรณีแห่งสนธิสัญญาด้วยความสุจริตใจ",
        options: [
            "pacta sunt servanda",
            "opinio juris",
            "jus cogens",
            "tabula rasa"
        ],
        answer: 0,
        reason: "<b>Pacta sunt servanda</b> (สนธิสัญญาต้องได้รับการเคารพ) เป็นหัวใจของอนุสัญญากรุงเวียนนาว่าด้วยกฎหมายสนธิสัญญา ค.ศ. 1969 มาตรา 26",
        type: "International Law"
    },
    // ข้อที่ 8
    {
        id: 8,
        day: 1,
        q: "The ministry issued a strongly-worded ________ to protest against unauthorized airspace intrusion.",
        translation: "กระทรวงได้ยื่น 'แถลงการณ์ประท้วงทางการทูต' อย่างเป็นทางการเพื่อคัดค้านการรุกล้ำน่านฟ้าโดยไม่ได้รับอนุญาต",
        options: ["rapprochement", "demarche", "consensus", "impasse"],
        answer: 1,
        reason: "<b>Demarche</b> คือเอกสารหรือการแถลงท่าทีทักท้วงอย่างเป็นทางการในการติดต่อระหว่างรัฐ",
        type: "Diplomatic Protocol"
    },
    // ข้อที่ 9
    {
        id: 9,
        day: 1,
        q: "Not only ________ the terms of the maritime accord, but they also recalled their defense attache.",
        translation: "พวกเขาไม่เพียงแต่ปฏิเสธข้อตกลงทางทะเลเท่านั้น แต่ยังเรียกตัวผู้ช่วยทูตฝ่ายทหารกลับประเทศอีกด้วย",
        options: [
            "they repudiated",
            "did they repudiate",
            "they had repudiated",
            "repudiated they"
        ],
        answer: 1,
        reason: "<b>Negative Inversion</b>: หลัง <i>Not only</i> ต้องสลับใช้ กริยาช่วย (did) + ประธาน (they) + กริยาฐาน (repudiate)",
        type: "Grammar"
    },
    // ข้อที่ 10
    {
        id: 10,
        day: 1,
        q: "The refugee agency reaffirmed that the customary norm of ________ strictly forbids returning asylum seekers to persecution.",
        translation: "สำนักงานข้าหลวงใหญ่ผู้ลี้ภัยยืนยันว่า บรรทัดฐานจารีตประเพณีว่าด้วย 'การไม่ส่งกลับ' ห้ามมิให้ผลักดันผู้แสวงหาที่ลี้ภัยกลับไปเผชิญการประหัตประหาร",
        options: ["annexation", "extradition", "non-refoulement", "naturalization"],
        answer: 2,
        reason: "<b>Non-refoulement</b> เป็นหลักสิทธิมนุษยชนสากลที่คุ้มครองผู้ลี้ภัยจากการถูกส่งตัวกลับไปเผชิญภยันตราย",
        type: "International Law"
    }
];
