const stories = {
    musa: {
        id: 'musa',
        title: 'شق البحر لموسى عليه السلام',
        slides: [
            {
                image: 'assets/images/moses_basket_nile_1776768826662.png',
                text: 'منذ ولادته، أحاطت رعاية الله بموسى عليه السلام. فألهم الله أمه أن تضعه في تابوت وتلقيه في اليم لحمايته من فرعون.'
            },
            {
                image: 'assets/images/moses_before_pharaoh_1776769045086.png',
                text: 'كبر موسى وأرسله الله بالآيات البينات إلى فرعون المتكبر، يدعوه إلى توحيد الله ورفع الظلم عن بني إسرائيل، مؤيداً بنور النبوة.'
            },
            {
                image: 'assets/images/red_sea_parting_1776769181782.png',
                text: 'عندما هرب موسى وقومه، تبعهم فرعون وجنوده. وأمام البحر المغلق، أمر الله موسى أن يضرب بعصاه البحر، فانفلق العظيم ليصبح طريقاً يابساً لنجاتهم.'
            }
        ],
        versesData: {
            surah: 'سورة الشعراء',
            // Verses 63, 64, 65, 66 from Ash-Shu'ara
            verses: [
                { id: 63, text: 'فَأَوْحَيْنَا إِلَىٰ مُوسَىٰ أَنِ اضْرِبْ بِعَصَاكَ الْبَحْرَ ۖ فَانْفَلَقَ فَكَانَ كُلُّ فِرْقٍ كَالطَّوْدِ الْعَظِيمِ', audio: 'https://everyayah.com/data/Minshawy_Murattal_128kbps/026063.mp3' },
                { id: 64, text: 'وَأَزْلَفْنَا ثَمَّ الْآخَرِينَ', audio: 'https://everyayah.com/data/Minshawy_Murattal_128kbps/026064.mp3' },
                { id: 65, text: 'وَأَنْجَيْنَا مُوسَىٰ وَمَنْ مَعَهُ أَجْمَعِينَ', audio: 'https://everyayah.com/data/Minshawy_Murattal_128kbps/026065.mp3' },
                { id: 66, text: 'ثُمَّ أَغْرَقْنَا الْآخَرِينَ', audio: 'https://everyayah.com/data/Minshawy_Murattal_128kbps/026066.mp3' }
            ]
        }
    },
    yunus: {
        id: 'yunus',
        title: 'يونس عليه السلام والحوت',
        slides: [
            {
                image: 'assets/images/yunus_stormy_ship_1776786893629.png',
                text: 'خرج يونس عليه السلام غاضباً من قومه وركب سفينة لتنقله بعيداً، ولكن العاصفة اشتدت، فاقترعوا ليلقوا أحدهم فرسا، فوقعت القرعة عليه ثلاثاً فألقى نفسه في البحر المكفهر.'
            },
            {
                image: 'assets/images/yunus_whale_deep_1776787088546.png',
                text: 'أمر الله حوتاً عظيماً أن يبتلعه دون أن يهشم له لحماً أو عظماً. وفي ظلمات البحر وبطن الحوت، نادى يونس ربه معترفاً بذنبه: "لا إله إلا أنت سبحانك إني كنت من الظالمين".'
            },
            {
                image: 'assets/images/yunus_shore_gourd_1776787370332.png',
                text: 'استجاب الله نداءه المخلص، ولفظه الحوت على الشاطئ حياً، وأنبت الله عليه شجرة يقطين لحمايته وتغذيته، ليعود إلى قومه برسالة التوحيد بقوة جديدة.'
            }
        ],
        versesData: {
            surah: 'سورة الصافات',
            verses: [
                { id: 139, text: 'وَإِنَّ يُونُسَ لَمِنَ الْمُرْسَلِينَ', audio: 'https://everyayah.com/data/Minshawy_Murattal_128kbps/037139.mp3' },
                { id: 140, text: 'إِذْ أَبَقَ إِلَى الْفُلْكِ الْمَشْحُونِ', audio: 'https://everyayah.com/data/Minshawy_Murattal_128kbps/037140.mp3' },
                { id: 141, text: 'فَسَاهَمَ فَكَانَ مِنَ الْمُدْحَضِينَ', audio: 'https://everyayah.com/data/Minshawy_Murattal_128kbps/037141.mp3' },
                { id: 142, text: 'فَالْتَقَمَهُ الْحُوتُ وَهُوَ مُلِيمٌ', audio: 'https://everyayah.com/data/Minshawy_Murattal_128kbps/037142.mp3' },
                { id: 143, text: 'فَلَوْلَا أَنَّهُ كَانَ مِنَ الْمُسَبِّحِينَ', audio: 'https://everyayah.com/data/Minshawy_Murattal_128kbps/037143.mp3' },
                { id: 144, text: 'لَلَبِثَ فِي بَطْنِهِ إِلَىٰ يَوْمِ يُبْعَثُونَ', audio: 'https://everyayah.com/data/Minshawy_Murattal_128kbps/037144.mp3' }
            ]
        }
    },
    sulaiman_ant: {
        id: 'sulaiman_ant',
        title: 'سليمان عليه السلام والنملة',
        slides: [
            {
                image: 'assets/images/sulaiman_army_1776866948529.png',
                text: 'جمع الله لنبيه سليمان عليه السلام ملكاً عظيماً لم يؤته أحداً من العالمين. وفي يوم من الأيام، خرج بجيشه المهيب المكون من الإنس والجن والطير، يسيرون في نظام دقيق وموكب عظيم، مؤيدين بنور النبوة.'
            },
            {
                image: 'assets/images/sulaiman_valley_1776867078746.png',
                text: 'أثناء مسيرهم، اقترب الموكب المهيب من وادٍ فسيح يُعرف بـ "وادي النمل". كان الوادي مليئاً بمساكن النمل وحياتهم الدؤوبة، ولم يكن جيش سليمان ليلتفت إلى هذه المخلوقات الصغيرة تحت أقدامهم.'
            },
            {
                image: 'assets/images/sulaiman_ant_warning_1776867231274.png',
                text: 'شعرت نملة باهتزاز الأرض واقتراب الخطر، فصاحت مناديةً بقومها بكل حرص: "يا أيها النمل ادخلوا مساكنكم لا يحطمنكم سليمان وجنوده وهم لا يشعرون".'
            },
            {
                image: 'assets/images/sulaiman_smiling_1776867533851.png',
                text: 'بحكمة الله ورحمته، سمع النبي سليمان عليه السلام صوت النملة الضعيف وفهم كلامها. أوقف مسيره العظيم، وتبسم ضاحكاً من قولها وحرصها على قومها، متأملاً في عظمة خلق الله.'
            },
            {
                image: 'assets/images/sulaiman_gratitude_1776867558504.png',
                text: 'رفع النبي سليمان يديه متضرعاً إلى الله، تحيطه هالة من نور الشكر، وقال: "رب أوزعني أن أشكر نعمتك التي أنعمت علي وعلى والدي وأن أعمل صالحاً ترضاه وأدخلني برحمتك في عبادك الصالحين".'
            }
        ],
        versesData: {
            surah: 'سورة النمل',
            verses: [
                { id: 17, text: 'وَحُشِرَ لِسُلَيْمَانَ جُنُودُهُ مِنَ الْجِنِّ وَالْإِنسِ وَالطَّيْرِ فَهُمْ يُوزَعُونَ', audio: 'https://everyayah.com/data/Minshawy_Murattal_128kbps/027017.mp3' },
                { id: 18, text: 'حَتَّىٰ إِذَا أَتَوْا عَلَىٰ وَادِ النَّمْلِ قَالَتْ نَمْلَةٌ يَا أَيُّهَا النَّمْلُ ادْخُلُوا مَسَاكِنَكُمْ لَا يَحْطِمَنَّكُمْ سُلَيْمَانُ وَجُنُودُهُ وَهُمْ لَا يَشْعُرُونَ', audio: 'https://everyayah.com/data/Minshawy_Murattal_128kbps/027018.mp3' },
                { id: 19, text: 'فَتَبَسَّمَ ضَاحِكًا مِّن قَوْلِهَا وَقَالَ رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَىٰ وَالِدَيَّ وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ وَأَدْخِلْنِي بِرَحْمَتِكَ فِي عِبَادِكَ الصَّالِحِينَ', audio: 'https://everyayah.com/data/Minshawy_Murattal_128kbps/027019.mp3' }
            ]
        }
    },
    elephant: {
        id: 'elephant',
        title: 'أصحاب الفيل',
        slides: [
            {
                image: 'assets/images/elephant_army_1776870295825.png',
                text: 'في عام الفيل، جهز أبرهة الأشرم جيشاً جراراً يتقدمه فيل عظيم، قاصداً مكة المكرمة لهدم الكعبة المشرفة بعد أن بنى كنيسة في اليمن وأراد صرف العرب إليها.'
            },
            {
                image: 'assets/images/elephant_2.png',
                text: 'وصل الجيش مشارف مكة، فخرج أهلها إلى الجبال خوفاً من بطش أبرهة وجيشه، تاركين البيت العتيق في حماية ربه، فقد قال عبد المطلب: "أنا رب الإبل، وللبيت رب يحميه".'
            },
            {
                image: 'assets/images/elephant_3.png',
                text: 'وما إن اقترب الجيش من الكعبة حتى برك الفيل ورفض التقدم. فجأة، أظلمت السماء بأسراب من الطير الأبابيل أرسلها الله سبحانه وتعالى لحماية بيته.'
            },
            {
                image: 'assets/images/elephant_4.png',
                text: 'ألقت الطيور على الجيش حجارة من سجيل، فهلك الجيش كله وأصبحوا كعصف مأكول، لتظل الكعبة شامخة محفوظة بعناية الله.'
            }
        ],
        versesData: {
            surah: 'سورة الفيل',
            verses: [
                { id: 1, text: 'أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ', audio: 'https://everyayah.com/data/Minshawy_Murattal_128kbps/105001.mp3' },
                { id: 2, text: 'أَلَمْ يَجْعَلْ كَيْدَهُمْ فِي تَضْلِيلٍ', audio: 'https://everyayah.com/data/Minshawy_Murattal_128kbps/105002.mp3' },
                { id: 3, text: 'وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ', audio: 'https://everyayah.com/data/Minshawy_Murattal_128kbps/105003.mp3' },
                { id: 4, text: 'تَرْمِيهِم بِحِجَارَةٍ مِّن سِجِّيلٍ', audio: 'https://everyayah.com/data/Minshawy_Murattal_128kbps/105004.mp3' },
                { id: 5, text: 'فَجَعَلَهُمْ كَعَصْفٍ مَّأْكُولٍ', audio: 'https://everyayah.com/data/Minshawy_Murattal_128kbps/105005.mp3' }
            ]
        }
    },
    cave: {
        id: 'cave',
        title: 'أصحاب الكهف',
        slides: [
            {
                image: 'assets/images/cave_1.png',
                text: 'في مدينة يحكمها ملك ظالم يعبد الأصنام، آمن فتية بربهم ورفضوا الشرك، فقرروا الفرار بدينهم للحفاظ على توحيدهم.'
            },
            {
                image: 'assets/images/cave_2.png',
                text: 'لجأ الفتية إلى كهف مهجور في الجبل، وتبعهم كلبهم الوفي الذي جلس عند باب الكهف باسطاً ذراعيه ليحرسهم.'
            },
            {
                image: 'assets/images/cave_3.png',
                text: 'ألقى الله عليهم سباتاً عميقاً، فناموا في الكهف ثلاثمائة وتسع سنين، تحيط بهم عناية الله وتتقلب أجسادهم يميناً وشمالاً لئلا تبلى.'
            },
            {
                image: 'assets/images/cave_4.png',
                text: 'بعثهم الله من نومهم الطويل ليكونوا آية للناس على قدرة الله على البعث، وليعلموا أن وعد الله حق، بعد أن وجدوا مدينتهم قد تغيرت وعمّ فيها الإيمان.'
            }
        ],
        versesData: {
            surah: 'سورة الكهف',
            verses: [
                { id: 9, text: 'أَمْ حَسِبْتَ أَنَّ أَصْحَابَ الْكَهْفِ وَالرَّقِيمِ كَانُوا مِنْ آيَاتِنَا عَجَبًا', audio: 'https://everyayah.com/data/Minshawy_Murattal_128kbps/018009.mp3' },
                { id: 10, text: 'إِذْ أَوَى الْفِتْيَةُ إِلَى الْكَهْفِ فَقَالُوا رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا', audio: 'https://everyayah.com/data/Minshawy_Murattal_128kbps/018010.mp3' },
                { id: 13, text: 'نَّحْنُ نَقُصُّ عَلَيْكَ نَبَأَهُم بِالْحَقِّ ۚ إِنَّهُمْ فِتْيَةٌ آمَنُوا بِرَبِّهِمْ وَزِدْنَاهُمْ هُدًى', audio: 'https://everyayah.com/data/Minshawy_Murattal_128kbps/018013.mp3' }
            ]
        }
    },
    yusuf: {
        id: 'yusuf',
        title: 'قصة يوسف الصديق',
        slides: [
            {
                image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80',
                text: 'رأى يوسف عليه السلام في منامه أحد عشر كوكباً والشمس والقمر يسجدون له، فقص رؤياه على أبيه يعقوب الذي أدرك عظمة شأن ابنه وحذره من كيد إخوته.'
            },
            {
                image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80',
                text: 'دبر إخوة يوسف مكيدة له بسبب غيرتهم، وألقوه في غيابة الجب في الصحراء المظلمة، لكن عناية الله كانت تحيط به وتحفظه.'
            },
            {
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
                text: 'بعد أن بيع يوسف في مصر وعاش في قصر العزيز، تعرض لفتنة عظيمة فآثر السجن على المعصية، فلبث في السجن بضع سنين يدعو إلى توحيد الله.'
            },
            {
                image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&q=80',
                text: 'بفضل علمه وتفسيره لرؤيا الملك، خرج يوسف من السجن ليصبح عزيز مصر وخازن أرزاقها، وتحققت رؤياه بسجود إخوته وأبويه تكريماً له.'
            }
        ],
        versesData: {
            surah: 'سورة يوسف',
            verses: [
                { id: 4, text: 'إِذْ قَالَ يُوسُفُ لِأَبِيهِ يَا أَبَتِ إِنِّي رَأَيْتُ أَحَدَ عَشَرَ كَوْكَبًا وَالشَّمْسَ وَالْقَمَرَ رَأَيْتُهُمْ لِي سَاجِدِينَ', audio: 'https://everyayah.com/data/Minshawy_Murattal_128kbps/012004.mp3' },
                { id: 5, text: 'قَالَ يَا بُنَيَّ لَا تَقْصُصْ رُؤْيَاكَ عَلَىٰ إِخْوَتِكَ فَيَكِيدُوا لَكَ كَيْدًا ۖ إِنَّ الشَّيْطَانَ لِلْإِنسَانِ عَدُوٌّ مُّبِينٌ', audio: 'https://everyayah.com/data/Minshawy_Murattal_128kbps/012005.mp3' }
            ]
        }
    },
    nuh: {
        id: 'nuh',
        title: 'قصة نوح والطوفان',
        slides: [
            {
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
                text: 'دعا نوح عليه السلام قومه إلى عبادة الله وحده ليلاً ونهاراً وسراً وجهاراً لمدة ألف سنة إلا خمسين عاماً، لكنهم استكبروا وأصروا على كفرهم.'
            },
            {
                image: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800&q=80',
                text: 'أوحى الله إلى نوح بصنع سفينة عظيمة في الصحراء، وكان قومه يسخرون منه كلما مروا عليه، وهو يصنعها بوحي الله ورعايته.'
            },
            {
                image: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?w=800&q=80',
                text: 'فارت التنور وفتحت أبواب السماء بماء منهمر، فركب نوح ومن آمن معه السفينة ومعهم من كل زوجين اثنين، واجتاح الطوفان العظيم الأرض.'
            },
            {
                image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
                text: 'نجا المؤمنون بفضل الله، وغرق الكافرون ومن بينهم ابن نوح الذي أبى أن يركب، ثم استوت السفينة بأمان على جبل الجودي.'
            }
        ],
        versesData: {
            surah: 'سورة هود',
            verses: [
                { id: 42, text: 'وَهِيَ تَجْرِي بِهِمْ فِي مَوْجٍ كَالْجِبَالِ وَنَادَىٰ نُوحٌ ابْنَهُ وَكَانَ فِي مَعْزِلٍ يَا بُنَيَّ ارْكَب مَّعَنَا وَلَا تَكُن مَّعَ الْكَافِرِينَ', audio: 'https://everyayah.com/data/Minshawy_Murattal_128kbps/011042.mp3' },
                { id: 43, text: 'قَالَ سَآوِي إِلَىٰ جَبَلٍ يَعْصِمُنِي مِنَ الْمَاءِ ۚ قَالَ لَا عَاصِمَ الْيَوْمَ مِنْ أَمْرِ اللَّهِ إِلَّا مَن رَّحِمَ ۚ وَحَالَ بَيْنَهُمَا الْمَوْجُ فَكَانَ مِنَ الْمُغْرَقِينَ', audio: 'https://everyayah.com/data/Minshawy_Murattal_128kbps/011043.mp3' }
            ]
        }
    },
    ibrahim: {
        id: 'ibrahim',
        title: 'قصة إبراهيم الخليل',
        slides: [
            {
                image: 'https://images.unsplash.com/photo-1548407260-da850faa41e3?w=800&q=80',
                text: 'أدرك إبراهيم عليه السلام ببصيرته بطلان عبادة الأصنام، فقام بتحطيم تماثيل قومه ليثبت لهم أنها لا تنفع ولا تضر، وترك كبيرهم لعلهم يتفكرون.'
            },
            {
                image: 'https://images.unsplash.com/photo-1551332445-8f52440b5a83?w=800&q=80',
                text: 'غضب الملك النمرود وقومه وأشعلوا ناراً عظيمة ألقوا فيها إبراهيم، لكن الله ألقى فيها رحمته لتكون برداً وسلاماً عليه، فخرج منها سليماً معافى.'
            },
            {
                image: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&q=80',
                text: 'في ابتلاء عظيم، رأى إبراهيم أنه يذبح ابنه إسماعيل فاستجابا لأمر الله بصبر، ففداه الله بكبش عظيم رحمة منه وجزاء لإيمانهما.'
            },
            {
                image: 'https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?w=800&q=80',
                text: 'بأمر من الله، قام إبراهيم وابنه إسماعيل عليهما السلام برفع قواعد البيت الحرام في مكة ليكون مثابة للناس وأمناً، وأذّن في الناس بالحج.'
            }
        ],
        versesData: {
            surah: 'سورة الأنبياء',
            verses: [
                { id: 68, text: 'قَالُوا حَرِّقُوهُ وَانصُرُوا آلِهَتَكُمْ إِن كُنتُمْ فَاعِلِينَ', audio: 'https://everyayah.com/data/Minshawy_Murattal_128kbps/021068.mp3' },
                { id: 69, text: 'قُلْنَا يَا نَارُ كُونِي بَرْدًا وَسَلَامًا عَلَىٰ إِبْرَاهِيمَ', audio: 'https://everyayah.com/data/Minshawy_Murattal_128kbps/021069.mp3' }
            ]
        }
    },
    maryam: {
        id: 'maryam',
        title: 'قصة السيدة مريم',
        slides: [
            {
                image: 'https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=800&q=80',
                text: 'نذرت امرأة عمران ما في بطنها محرراً لله، فتقبلها ربها بقبول حسن وأنبتها نباتاً حسناً وكفلها زكريا، وكلما دخل عليها المحراب وجد عندها رزقاً.'
            },
            {
                image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=800&q=80',
                text: 'اعتزلت مريم قومها، فأرسل الله إليها الملاك جبريل يبشرها بغلام زكي، فتعجبت كيف يكون لها ولد ولم يمسسها بشر، فأخبرها أن ذلك على الله هين.'
            },
            {
                image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
                text: 'جاءها المخاض إلى جذع النخلة وهي وحيدة، فناداها من تحتها ألا تحزني وأمرها أن تهز جذع النخلة ليتساقط عليها رطباً جنياً تأكل منه وتقر عينها.'
            },
            {
                image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&q=80',
                text: 'عادت إلى قومها تحمل طفلها عيسى، فاستنكروا أمرها، فأشارت إليه، فنطق الرضيع في المهد معلناً أنه عبد الله ونبيه، مبرئاً أمه الطاهرة.'
            }
        ],
        versesData: {
            surah: 'سورة مريم',
            verses: [
                { id: 30, text: 'قَالَ إِنِّي عَبْدُ اللَّهِ آتَانِيَ الْكِتَابَ وَجَعَلَنِي نَبِيًّا', audio: 'https://everyayah.com/data/Minshawy_Murattal_128kbps/019030.mp3' },
                { id: 31, text: 'وَجَعَلَنِي مُبَارَكًا أَيْنَ مَا كُنتُ وَأَوْصَانِي بِالصَّلَاةِ وَالزَّكَاةِ مَا دُمْتُ حَيًّا', audio: 'https://everyayah.com/data/Minshawy_Murattal_128kbps/019031.mp3' },
                { id: 32, text: 'وَبَرًّا بِوَالِدَتِي وَلَمْ يَجْعَلْنِي جَبَّارًا شَقِيًّا', audio: 'https://everyayah.com/data/Minshawy_Murattal_128kbps/019032.mp3' },
                { id: 33, text: 'وَالسَّلَامُ عَلَيَّ يَوْمَ وُلِدتُّ وَيَوْمَ أَمُوتُ وَيَوْمَ أُبْعَثُ حَيًّا', audio: 'https://everyayah.com/data/Minshawy_Murattal_128kbps/019033.mp3' }
            ]
        }
    }
};

let currentStory = null;
let currentSlideIndex = 0;
let currentVerseIndex = 0;
let audioPlayer = null;

const views = {
    home: document.getElementById('home-view'),
    story: document.getElementById('story-view'),
    verses: document.getElementById('verses-view')
};

// Functions to switch views
function showView(viewName) {
    Object.values(views).forEach(v => {
        v.classList.remove('active');
        v.classList.add('hidden');
    });
    views[viewName].classList.remove('hidden');

    // Tiny delay to allow display:block to apply before opacity fades in
    setTimeout(() => {
        views[viewName].classList.add('active');
    }, 10);
}

function openStory(storyId) {
    currentStory = stories[storyId];
    currentSlideIndex = 0;

    // Stop audio if playing
    if (audioPlayer) {
        audioPlayer.pause();
    }

    renderSlide();
    showView('story');
}

function closeStory() {
    if (audioPlayer) {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        document.getElementById('play-icon').style.display = 'block';
        document.getElementById('pause-icon').style.display = 'none';
    }
    showView('home');
}

function renderSlide() {
    const slide = currentStory.slides[currentSlideIndex];
    document.getElementById('slide-image').style.backgroundImage = `url('${slide.image}')`;
    document.getElementById('slide-text').innerText = slide.text;

    // Update controls
    document.getElementById('prev-btn').classList.toggle('hidden', currentSlideIndex === 0);

    const nextBtn = document.getElementById('next-btn');
    if (currentSlideIndex === currentStory.slides.length - 1) {
        nextBtn.innerText = 'تلاوة الآيات';
    } else {
        nextBtn.innerText = 'التالي';
    }

    // Update dots
    const dotsContainer = document.getElementById('dots-container');
    dotsContainer.innerHTML = '';
    currentStory.slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `dot ${index === currentSlideIndex ? 'active' : ''}`;
        dotsContainer.appendChild(dot);
    });
}

function nextSlide() {
    if (currentSlideIndex < currentStory.slides.length - 1) {
        currentSlideIndex++;
        renderSlide();
    } else {
        openVersesView();
    }
}

function prevSlide() {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        renderSlide();
    }
}

// Verses and Audio Logic
function openVersesView() {
    const versesData = currentStory.versesData;
    const container = document.getElementById('quran-text');

    document.querySelector('.surah-title').innerText = versesData.surah;

    let html = '';
    versesData.verses.forEach(v => {
        html += `<span id="ayah-${v.id}" class="ayah-text">${v.text} <span class="ayah-symbol">﴿${v.id}﴾</span></span> `;
    });
    container.innerHTML = html;

    currentVerseIndex = 0;
    setupAudio();
    showView('verses');
}

function setupAudio() {
    audioPlayer = document.getElementById('quran-audio');

    // On audio end, play next verse if available
    audioPlayer.onended = () => {
        document.getElementById(`ayah-${currentStory.versesData.verses[currentVerseIndex].id}`).classList.remove('active-ayah');

        currentVerseIndex++;
        if (currentVerseIndex < currentStory.versesData.verses.length) {
            playCurrentVerse();
        } else {
            // Finished
            currentVerseIndex = 0; // reset
            document.getElementById('play-icon').style.display = 'block';
            document.getElementById('pause-icon').style.display = 'none';
            document.getElementById('current-verse-info').innerText = "تمت التلاوة";
        }
    };

    loadCurrentVerse();
}

function loadCurrentVerse() {
    const verse = currentStory.versesData.verses[currentVerseIndex];
    audioPlayer.src = verse.audio;
    document.getElementById('current-verse-info').innerText = `الآية ${verse.id}`;

    // Highlight verse
    document.querySelectorAll('.ayah-text').forEach(el => el.classList.remove('active-ayah'));
    document.getElementById(`ayah-${verse.id}`).classList.add('active-ayah');
}

function playCurrentVerse() {
    loadCurrentVerse();
    audioPlayer.play();
    document.getElementById('play-icon').style.display = 'none';
    document.getElementById('pause-icon').style.display = 'block';
}

function togglePlay() {
    if (!audioPlayer.src) {
        loadCurrentVerse();
    }

    if (audioPlayer.paused) {
        audioPlayer.play();
        document.getElementById('play-icon').style.display = 'none';
        document.getElementById('pause-icon').style.display = 'block';
    } else {
        audioPlayer.pause();
        document.getElementById('play-icon').style.display = 'block';
        document.getElementById('pause-icon').style.display = 'none';
    }
}
