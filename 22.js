const input = [
    'on x=-39..5,y=-35..13,z=-14..36',
    'on x=-39..12,y=-43..6,z=-4..42',
    'on x=-18..35,y=-24..21,z=-12..34',
    'on x=-2..48,y=-14..38,z=-9..44',
    'on x=-14..40,y=-37..13,z=-47..4',
    'on x=-34..18,y=-5..43,z=-46..5',
    'on x=-37..13,y=-37..12,z=-43..6',
    'on x=-15..32,y=-4..42,z=-49..3',
    'on x=-12..34,y=-7..37,z=-11..35',
    'on x=-49..-2,y=-24..21,z=-23..21',
    'off x=-41..-30,y=34..43,z=17..29',
    'on x=-35..18,y=-19..31,z=-49..-3',
    'off x=8..27,y=34..44,z=-42..-23',
    'on x=-8..40,y=-19..30,z=-8..37',
    'off x=5..21,y=4..18,z=-18..-6',
    'on x=-5..47,y=-34..15,z=-10..34',
    'off x=36..47,y=16..30,z=-43..-31',
    'on x=-26..18,y=-37..9,z=-14..31',
    'off x=-48..-31,y=-14..5,z=-46..-29',
    'on x=-7..43,y=-47..3,z=-43..2',
    'on x=44376..68804,y=-48705..-15357,z=24716..43885',
    'on x=-21982..7354,y=-72100..-52655,z=-54700..-23422',
    'on x=-95686..-69611,y=-6138..7341,z=-34461..682',
    'on x=-39313..-22291,y=-52769..-22058,z=-74207..-55228',
    'on x=-84182..-71511,y=-22383..-8133,z=9884..34013',
    'on x=13052..31860,y=-49825..-39836,z=-76278..-47166',
    'on x=42112..63739,y=49609..82927,z=-5652..1570',
    'on x=50956..59360,y=-20349..-6642,z=58309..73337',
    'on x=-32266..-7203,y=-78572..-61137,z=-21395..-1168',
    'on x=-15107..5437,y=-62160..-41818,z=40086..67411',
    'on x=-49148..-14247,y=-85805..-70118,z=4246..26870',
    'on x=-27523..1624,y=47442..70217,z=-59370..-41370',
    'on x=-89874..-63281,y=-20337..-12317,z=-14524..6016',
    'on x=-13503..10223,y=-1492..29130,z=59433..82456',
    'on x=-64415..-34133,y=-43879..-38552,z=-46662..-23085',
    'on x=32608..43505,y=-67814..-51197,z=35147..54934',
    'on x=-25117..-13446,y=18009..50229,z=-88050..-65503',
    'on x=72951..89013,y=-9518..706,z=-10421..9211',
    'on x=-67073..-56268,y=-36009..-24374,z=-61656..-35775',
    'on x=44600..55717,y=-58629..-44296,z=21261..31591',
    'on x=55056..76817,y=28977..47134,z=-44485..-41047',
    'on x=-62574..-40195,y=-54355..-46418,z=7541..17714',
    'on x=-82572..-60863,y=-3753..19884,z=19658..33974',
    'on x=65144..71401,y=-53869..-24826,z=-18180..9515',
    'on x=-58529..-28139,y=-57811..-37877,z=-60152..-31098',
    'on x=-20485..-14887,y=-41400..-17796,z=-85827..-56385',
    'on x=62242..93571,y=-23011..-2550,z=-36540..-15190',
    'on x=-54334..-39347,y=-46921..-34989,z=-66685..-38436',
    'on x=46212..60163,y=36666..65994,z=14670..33455',
    'on x=-68552..-60302,y=-49448..-29874,z=-33016..-16690',
    'on x=29609..57238,y=-78679..-41679,z=-31629..-20579',
    'on x=-10425..23658,y=-74839..-69124,z=-50624..-15942',
    'on x=22794..51988,y=3487..15323,z=57968..80084',
    'on x=-72108..-55039,y=29525..61626,z=-38041..-14406',
    'on x=-15261..16612,y=-57966..-51812,z=49096..74982',
    'on x=-68987..-63103,y=32101..62014,z=7504..12131',
    'on x=-42995..-24212,y=64192..72052,z=7814..19630',
    'on x=79089..87509,y=-7205..-2585,z=-7129..12036',
    'on x=54105..83521,y=-38043..-23555,z=-34805..-15476',
    'on x=-94920..-58707,y=-18246..-1906,z=9602..26529',
    'on x=10052..31620,y=46809..67240,z=-63858..-34276',
    'on x=12796..28130,y=-40930..-21439,z=59802..74164',
    'on x=-4453..12194,y=54786..70834,z=26134..57093',
    'on x=12948..39879,y=-81054..-67328,z=4952..24256',
    'on x=43498..54911,y=12897..20772,z=-67851..-40434',
    'on x=4651..21791,y=40098..52894,z=55234..78276',
    'on x=20929..45690,y=47182..66484,z=-38123..-10665',
    'on x=-35571..-18884,y=-95156..-70523,z=-12407..655',
    'on x=21485..42816,y=59018..80252,z=27737..49408',
    'on x=31224..61039,y=-26356..561,z=59264..68661',
    'on x=55006..75859,y=38222..49067,z=-30342..-23838',
    'on x=-24251..-8350,y=-96431..-64530,z=16331..34444',
    'on x=-19775..-4190,y=73940..82734,z=-26826..-4406',
    'on x=21070..40022,y=-79577..-53804,z=32493..56755',
    'on x=-30806..-26033,y=-60967..-47048,z=-53522..-48149',
    'on x=9826..42348,y=50570..86082,z=28563..45884',
    'on x=-11534..15662,y=18034..22234,z=73697..90496',
    'on x=-27429..-14001,y=58457..67484,z=37728..49990',
    'on x=-39472..-16372,y=43990..66995,z=37300..71422',
    'on x=20618..30555,y=-12093..8163,z=-82969..-63500',
    'on x=56305..79821,y=10924..32400,z=-22945..3230',
    'on x=1794..23575,y=-36530..-9271,z=-80139..-73909',
    'on x=60521..81165,y=-57760..-24345,z=-10922..2051',
    'on x=-23272..-7919,y=-75247..-41911,z=-59625..-37674',
    'on x=-12014..5284,y=-80974..-65776,z=1772..20046',
    'on x=3588..13589,y=-45163..-6767,z=74163..86557',
    'on x=-64758..-57654,y=-19983..-13306,z=-58565..-26249',
    'on x=15420..37337,y=55167..68832,z=-43355..-30867',
    'on x=29579..54828,y=682..25901,z=56548..69101',
    'on x=-11354..8987,y=-74475..-51152,z=32959..57100',
    'on x=-90573..-69126,y=-12096..-1585,z=1729..21605',
    'on x=27642..48565,y=26246..55845,z=-69312..-39550',
    'on x=-34232..-20872,y=-83429..-55110,z=298..20921',
    'on x=-68519..-55303,y=47006..49460,z=-39589..-14535',
    'on x=-87096..-73679,y=5361..21350,z=-22441..-13338',
    'on x=48940..75199,y=39848..49521,z=3995..28269',
    'on x=-46361..-38221,y=39348..53553,z=33117..53828',
    'on x=49419..78649,y=-2079..10892,z=26175..47193',
    'on x=-47542..-27244,y=-23738..4756,z=54014..67766',
    'on x=-49815..-38896,y=-56296..-35230,z=-60855..-43925',
    'on x=-42155..-6740,y=-79318..-72062,z=-32112..-6229',
    'on x=-41199..-26591,y=49982..56899,z=46794..68594',
    'on x=14202..36199,y=-86960..-51889,z=-32872..-6816',
    'on x=5652..20041,y=-30336..-9171,z=-93426..-75385',
    'on x=4130..10245,y=-78424..-44425,z=53202..60401',
    'on x=76934..83473,y=-31382..-3003,z=-13769..18038',
    'on x=16203..27968,y=-86890..-60027,z=-36571..-17471',
    'on x=-36020..-13155,y=24047..41612,z=44971..70126',
    'on x=44639..71308,y=24855..41285,z=36948..47080',
    'on x=-85564..-63840,y=-571..12444,z=23655..53760',
    'on x=-1113..22743,y=17625..34671,z=-84990..-71891',
    'on x=48665..69026,y=-59040..-39470,z=-34599..-14500',
    'on x=28163..47713,y=-71752..-42764,z=-39707..-33186',
    'on x=-24922..1320,y=-78488..-72526,z=-39221..-19901',
    'on x=-48169..-29548,y=-10710..3739,z=60703..67263',
    'on x=58003..89557,y=-4512..15511,z=8512..33474',
    'on x=-53118..-45886,y=-58614..-34964,z=-46668..-27288',
    'on x=35649..62168,y=-27426..-5418,z=56714..80730',
    'on x=-59247..-36213,y=46584..59150,z=42857..54015',
    'on x=-83070..-65963,y=-37491..-30054,z=4923..22902',
    'on x=-61931..-37206,y=-68651..-30565,z=21041..44091',
    'on x=-21476..1237,y=6542..32156,z=61723..80349',
    'on x=-17242..11913,y=65981..79849,z=30336..41531',
    'on x=-72754..-53313,y=32875..61238,z=-10727..17032',
    'on x=57853..76734,y=-47427..-16285,z=-49900..-33201',
    'on x=69015..72619,y=-21511..9321,z=-41343..-37464',
    'on x=50063..78694,y=-7573..22119,z=36808..63570',
    'on x=-52332..-30665,y=-69078..-67631,z=-2466..25247',
    'on x=-82578..-49563,y=-43704..-21430,z=-52902..-20524',
    'on x=-52700..-29895,y=401..3066,z=-76216..-63429',
    'on x=54657..78683,y=40152..56083,z=-34336..-12431',
    'on x=59014..76196,y=30556..50093,z=-22385..-13553',
    'on x=-6565..13512,y=-82809..-65292,z=-23274..14535',
    'on x=65912..83871,y=25817..43425,z=14838..41142',
    'on x=-4414..12579,y=65075..88197,z=-49882..-33903',
    'on x=-59585..-48253,y=-65527..-40150,z=3507..35270',
    'on x=-34412..-33575,y=-10846..9654,z=-88240..-55803',
    'on x=47871..57646,y=27316..34052,z=-61856..-44297',
    'on x=20655..33729,y=544..4246,z=-80556..-60447',
    'on x=-71676..-56858,y=-15967..-842,z=42344..61759',
    'on x=24440..54180,y=-65387..-36391,z=-56793..-38477',
    'on x=-12096..12068,y=27154..43843,z=64131..89303',
    'on x=-2980..20262,y=-37803..-25018,z=-78700..-61068',
    'on x=-15565..13314,y=146..13655,z=65571..91970',
    'on x=58667..66912,y=47731..64754,z=1661..26615',
    'on x=-6081..9984,y=28275..41668,z=60669..77493',
    'on x=-88118..-65745,y=-5166..21142,z=9270..17731',
    'on x=-73373..-51151,y=6122..25687,z=-47346..-17269',
    'on x=34573..56840,y=-60729..-38852,z=-20684..-11689',
    'on x=63503..77422,y=-35871..-31205,z=-44723..-24009',
    'on x=67950..71906,y=25251..38626,z=-32889..4841',
    'on x=30142..49261,y=-39743..-17231,z=-81205..-61873',
    'on x=-10426..-753,y=12408..30119,z=63276..90039',
    'on x=9956..17074,y=-76190..-52204,z=15525..42913',
    'on x=-84076..-52535,y=15299..39297,z=-42187..-32457',
    'on x=-56861..-36789,y=42861..70908,z=15572..38455',
    'on x=-76387..-64786,y=-20634..-7176,z=-51239..-28309',
    'on x=-81799..-67512,y=5048..20266,z=17570..37695',
    'on x=38650..66859,y=25411..39033,z=-50146..-46574',
    'on x=4161..37779,y=8930..44268,z=-84790..-67401',
    'on x=13246..45675,y=38773..55659,z=44556..75921',
    'on x=-19986..-6023,y=50487..66811,z=33721..68143',
    'on x=-71589..-51093,y=2711..24060,z=-71818..-36003',
    'on x=-3048..17261,y=37200..61654,z=-71856..-38051',
    'on x=-3760..22094,y=18379..42388,z=57895..89788',
    'on x=-72676..-56382,y=-46593..-21477,z=7176..34800',
    'on x=16885..37724,y=-42176..-36835,z=-58909..-52505',
    'on x=-51218..-23762,y=-76706..-62809,z=3745..27888',
    'on x=-4158..22783,y=22246..36168,z=-88517..-68282',
    'on x=-17707..-669,y=37943..62646,z=46586..63036',
    'on x=51581..77745,y=28596..40626,z=-45686..-18766',
    'on x=19510..36622,y=-44622..-35467,z=44727..70693',
    'on x=-49969..-37700,y=-8439..20254,z=60227..72705',
    'on x=-87133..-74151,y=-7957..1418,z=-12233..12443',
    'on x=-79581..-46482,y=-50454..-28048,z=-21188..-4488',
    'on x=12115..36260,y=-85695..-64322,z=-35294..-7700',
    'on x=-66936..-61385,y=-28259..-8372,z=39848..43838',
    'on x=55797..74862,y=-22855..8027,z=14366..34461',
    'on x=-78519..-68384,y=-8400..4305,z=26489..46069',
    'on x=33710..61151,y=-73825..-56987,z=-859..10787',
    'on x=-20323..-9474,y=73468..92403,z=15564..37663',
    'on x=-11584..-3974,y=-78320..-71965,z=6768..26626',
    'on x=68817..94538,y=-28882..1604,z=20398..27819',
    'on x=-60590..-28801,y=4313..20497,z=59752..77447',
    'on x=-12301..-137,y=-4991..29354,z=61971..95666',
    'on x=-26298..2078,y=-16726..7487,z=69348..95218',
    'on x=-77805..-62930,y=-17711..9685,z=-48430..-22296',
    'on x=-65598..-43478,y=34089..58996,z=22098..47142',
    'on x=55681..75203,y=-19304..-5256,z=43792..50101',
    'on x=14283..46087,y=-33566..-19848,z=66165..75341',
    'on x=-53066..-32905,y=-74627..-48896,z=11029..38541',
    'on x=13226..22225,y=68164..82264,z=16625..30459',
    'on x=53012..75248,y=38405..50603,z=-32275..-9158',
    'on x=31718..64008,y=-37391..-25375,z=34911..57824',
    'on x=-82524..-51148,y=-43451..-21663,z=28357..52000',
    'on x=72825..79013,y=-29581..-18470,z=-6801..18568',
    'on x=50322..78782,y=-38263..-15163,z=-45541..-11542',
    'on x=-9968..4488,y=-76717..-62990,z=8897..34826',
    'on x=51218..72195,y=-5871..18134,z=-74190..-47547',
    'on x=59247..79105,y=-35491..-13984,z=8686..31348',
    'on x=17270..49092,y=72928..92514,z=1990..20737',
    'on x=37147..57386,y=-79496..-59486,z=18394..32481',
    'on x=-17992..-1930,y=69389..96284,z=-2008..10457',
    'on x=-42343..-12768,y=9556..30709,z=68231..77138',
    'on x=26343..50892,y=37914..54650,z=-69698..-44575',
    'on x=-21281..-2499,y=-83558..-75061,z=-20797..632',
    'on x=-27553..206,y=41306..61575,z=-71885..-63568',
    'on x=-77321..-56591,y=32040..50463,z=-10122..15651',
    'on x=-31304..-14034,y=-46405..-24775,z=-64353..-62200',
    'on x=-67059..-30314,y=-67516..-64330,z=195..11315',
    'on x=49035..86098,y=-19070..14689,z=-50639..-25557',
    'on x=-13990..-5245,y=62776..90087,z=1796..13412',
    'on x=13700..39412,y=44834..73186,z=27091..52781',
    'on x=-71221..-59506,y=23032..48437,z=19272..53538',
    'on x=-9175..8037,y=-81681..-64066,z=2569..36284',
    'on x=47839..63066,y=36069..47232,z=-55669..-38541',
    'on x=-74692..-50422,y=-27156..11173,z=-67428..-46732',
    'on x=69768..75308,y=11225..16663,z=-43002..-23209',
    'on x=4070..36468,y=-87207..-69693,z=-570..4995',
    'on x=-70594..-54607,y=39273..55208,z=3871..6157',
    'off x=-91614..-65938,y=-49141..-22729,z=-12901..22098',
    'on x=4219..35714,y=40364..70566,z=-69107..-44872',
    'off x=33168..59615,y=-37366..-20785,z=43736..58964',
    'on x=-8104..8747,y=19979..46135,z=59286..76054',
    'off x=4830..14607,y=-75863..-48644,z=48273..69627',
    'on x=-60664..-38478,y=-48901..-36850,z=-65750..-49089',
    'off x=45591..60083,y=18509..39961,z=36806..62002',
    'on x=-47043..-23270,y=-20506..13821,z=-91912..-52879',
    'off x=67802..93598,y=-30573..-4902,z=6099..42841',
    'off x=-64707..-34756,y=-65267..-43871,z=-49744..-16008',
    'on x=27253..36348,y=-8548..9367,z=-84618..-55650',
    'off x=37890..63461,y=23483..41076,z=-58487..-40206',
    'on x=32795..59152,y=-58007..-45253,z=-54004..-19334',
    'off x=-36880..-31665,y=-5451..9866,z=56794..74361',
    'on x=6488..34465,y=64585..76786,z=-47312..-18654',
    'off x=-55650..-47636,y=30396..49175,z=-51293..-44144',
    'off x=-63747..-40098,y=-35293..-12768,z=-52002..-32466',
    'off x=-12882..8475,y=48966..82337,z=42277..62793',
    'off x=7118..22862,y=-18711..16147,z=-88286..-65477',
    'off x=-10836..13242,y=69350..72312,z=-45448..-38661',
    'on x=-52420..-38131,y=-77414..-52778,z=14542..42764',
    'on x=-89848..-66409,y=168..23695,z=-27156..1803',
    'off x=-54865..-22480,y=-76050..-57085,z=-47469..-28871',
    'on x=34515..43475,y=-81848..-58808,z=-20041..-9740',
    'off x=-23602..1520,y=-56201..-20329,z=-76295..-51683',
    'off x=46724..58847,y=44789..71411,z=1618..35206',
    'on x=-90915..-71229,y=-46074..-20817,z=-21032..5784',
    'on x=-98..21791,y=-35834..-2497,z=-81933..-60085',
    'on x=-74850..-54749,y=-32365..-18486,z=-20341..-12416',
    'on x=-28882..-4927,y=-69471..-62642,z=33132..52065',
    'off x=-15753..12375,y=61568..86274,z=-21514..-3531',
    'on x=-26785..-8677,y=14777..47992,z=51645..84431',
    'off x=523..26029,y=66883..96032,z=-430..29557',
    'off x=-74333..-49995,y=16582..46790,z=5195..38084',
    'off x=-19519..814,y=-74313..-60827,z=34126..53365',
    'off x=45895..60493,y=9315..33586,z=44229..68720',
    'on x=25839..50689,y=45783..53741,z=-61000..-28621',
    'on x=-37121..-8622,y=-47005..-16169,z=61422..87162',
    'on x=66248..96120,y=-33693..-12823,z=-3306..19562',
    'on x=6802..13551,y=-13075..1641,z=-94326..-65241',
    'off x=-68543..-48857,y=-35025..-16859,z=-57310..-37490',
    'on x=-38208..-18088,y=6973..22100,z=68284..83068',
    'on x=20728..50272,y=35670..64345,z=48305..61031',
    'on x=-82231..-73061,y=-22341..-18141,z=-32467..-5599',
    'on x=13111..37959,y=61103..76463,z=14756..34344',
    'off x=52587..90614,y=-47947..-27815,z=-24454..251',
    'on x=59006..80617,y=14840..31479,z=-60329..-35257',
    'on x=-43296..-23339,y=37750..52597,z=47208..66507',
    'on x=28037..45643,y=-57407..-50053,z=28589..49073',
    'on x=-79817..-67360,y=-4100..18242,z=-15874..7790',
    'off x=48532..69937,y=-52574..-42522,z=16906..43193',
    'off x=32462..70303,y=-11713..16656,z=-67265..-47847',
    'off x=-26523..-17080,y=-53738..-30409,z=-74185..-60454',
    'off x=-30288..-11416,y=-20515..3915,z=64006..89890',
    'on x=-48295..-36884,y=60055..79055,z=-33103..-447',
    'on x=12608..31852,y=46080..75888,z=20979..38768',
    'on x=45913..61608,y=-3048..8923,z=45246..67757',
    'off x=-26653..2107,y=20009..24828,z=65800..93552',
    'off x=-1858..19946,y=55890..80052,z=-62665..-43406',
    'on x=-42023..-25362,y=14452..29936,z=-81778..-54958',
    'on x=-17888..6293,y=-58566..-25693,z=-71302..-51354',
    'on x=37577..61853,y=58817..76394,z=-33566..-4584',
    'off x=-70992..-58470,y=-56639..-28210,z=-19466..-2208',
    'off x=52273..76206,y=28943..47161,z=14699..43674',
    'off x=23758..48975,y=-69990..-63327,z=-45071..-21137',
    'off x=59735..84688,y=13427..30113,z=25941..44318',
    'off x=-23580..1219,y=71552..81377,z=10803..23711',
    'on x=-4176..14097,y=78310..82094,z=5524..14136',
    'off x=37705..60673,y=43265..76118,z=12902..30343',
    'on x=-13173..12423,y=-13589..16214,z=-91780..-74972',
    'off x=7344..28831,y=-14806..17747,z=59912..92740',
    'off x=-7716..15471,y=16197..36505,z=73204..89957',
    'off x=50757..75240,y=-49505..-26144,z=-50703..-26451',
    'off x=-68228..-48773,y=-55335..-37515,z=-16806..424',
    'on x=28828..60591,y=-40340..-23250,z=53261..75456',
    'off x=17249..39205,y=-30393..-1469,z=74331..81522',
    'off x=-41565..-26008,y=49599..84922,z=15664..43984',
    'on x=-51255..-31891,y=-59306..-31019,z=44621..50118',
    'on x=-15369..-2347,y=-94087..-63092,z=-16595..-1953',
    'off x=69469..80984,y=1119..18363,z=14124..26481',
    'off x=18068..36949,y=-74065..-61304,z=-47739..-25181',
    'off x=53214..64436,y=2417..34457,z=-59352..-44412',
    'off x=-24903..2512,y=-63668..-34872,z=-81969..-47226',
    'off x=34810..64306,y=-74337..-56061,z=-19370..-9729',
    'on x=-66509..-44443,y=-40172..-19474,z=28121..45661',
    'off x=-36374..-19635,y=-66333..-34041,z=-71642..-46167',
    'off x=-75397..-51655,y=-46533..-16675,z=15665..41437',
    'on x=-67231..-50231,y=32645..45946,z=-52772..-36314',
    'off x=15532..42255,y=42977..73876,z=-41724..-28899',
    'on x=-638..11438,y=64611..74447,z=-44248..-21313',
    'on x=64134..88886,y=9851..22058,z=-32496..-15750',
    'on x=-36890..-11005,y=-79611..-66163,z=15502..27956',
    'on x=57174..74239,y=-52035..-23720,z=18846..45953',
    'on x=-11688..2112,y=30071..49114,z=-80075..-59814',
    'off x=-23540..-8417,y=-58056..-35582,z=65655..80490',
    'on x=-105..33967,y=-61550..-42727,z=-64519..-59397',
    'off x=50608..64639,y=52047..66615,z=-18294..3775',
    'on x=-26915..-12048,y=-41204..-26266,z=-84867..-64314',
    'off x=-5082..10543,y=66797..99517,z=-7318..2895',
    'on x=-78276..-46126,y=-60635..-47124,z=10331..28889',
    'on x=-64135..-30374,y=-73285..-49714,z=-18883..18253',
    'on x=-75748..-41518,y=46896..53281,z=-41494..-20714',
    'off x=2480..24609,y=-1133..4080,z=-82339..-70692',
    'on x=37426..40444,y=44719..64539,z=-63168..-46305',
    'off x=-24247..-4199,y=-91675..-70918,z=21600..26475',
    'off x=-42637..-17740,y=10111..34133,z=-80365..-66251',
    'on x=-71979..-63006,y=17628..54546,z=-25282..-8620',
    'off x=19903..40797,y=-45479..-26102,z=-60598..-40865',
    'off x=-19025..4339,y=48332..73243,z=39512..59538',
    'off x=-16909..12393,y=-90787..-66351,z=-27829..-18967',
    'off x=-41734..-18617,y=45390..68801,z=-54896..-43486',
    'on x=-34064..-15575,y=58590..87323,z=7208..21276',
    'off x=-12155..156,y=-91244..-73776,z=9049..34240',
    'on x=-46944..-17409,y=62237..76360,z=-499..1781',
    'on x=67286..78354,y=-40480..-5879,z=-9310..22374',
    'off x=61003..73081,y=20798..37756,z=-29692..1713',
    'off x=-26749..-11336,y=41399..60267,z=-55917..-46404',
    'on x=43741..51485,y=-33420..-15157,z=-74059..-46288',
    'off x=40664..49756,y=-56738..-53184,z=18404..49888',
    'off x=11119..34026,y=53518..73329,z=-40674..-29215',
    'on x=356..32735,y=-42795..-31022,z=64421..80511',
    'on x=-17765..6912,y=64293..82451,z=-10834..3740',
    'off x=-23117..-7497,y=-56197..-38196,z=45032..78936',
    'off x=-33928..-5819,y=3505..30266,z=65655..76454',
    'off x=40655..60141,y=-61397..-30392,z=23106..55441',
    'off x=-33018..-11881,y=48774..71231,z=-54940..-43163',
    'off x=-55148..-29924,y=-72179..-55281,z=11364..43289',
    'on x=23824..53365,y=47485..83819,z=19219..40382',
    'off x=-58823..-38660,y=36160..74182,z=10658..38800',
    'off x=-72657..-51235,y=-43758..-26077,z=23572..48361',
    'on x=23769..53740,y=60193..86746,z=-42134..-11571',
    'on x=-71003..-58647,y=-58346..-38690,z=-10719..7604',
    'on x=55343..62594,y=9242..20993,z=32859..61464',
    'on x=-15866..738,y=62300..84387,z=29622..37893',
    'off x=23438..35850,y=50146..65201,z=33363..48271',
    'off x=-46555..-30538,y=2719..28246,z=44730..66253',
    'off x=-81236..-68127,y=-22722..-1561,z=-19482..8343',
    'on x=-54410..-35969,y=28110..46111,z=29503..59945',
    'off x=-21105..-14679,y=-22141..-3730,z=65579..92504',
    'off x=2960..13126,y=19056..24557,z=-91185..-64145',
    'off x=-2149..9769,y=60724..84132,z=19846..39777',
    'on x=36472..49717,y=-70114..-63270,z=-45438..-26150',
    'on x=-75795..-44009,y=-68905..-39498,z=-6911..24865',
    'on x=-35744..-18334,y=-72301..-56851,z=-50405..-23276',
    'on x=36874..68825,y=-72743..-46875,z=-29853..-15420',
    'on x=64687..90942,y=-31723..-10600,z=12627..35451',
    'off x=-24033..7058,y=5212..34036,z=63308..96443',
    'on x=-32461..-11993,y=-18599..13496,z=67858..95825',
    'on x=-14787..19571,y=58502..74162,z=-69576..-34257',
    'on x=53452..82869,y=-49520..-34240,z=-16026..11625',
    'off x=-83866..-59122,y=2100..32027,z=24198..44205',
    'off x=-14365..2319,y=-89755..-73018,z=4880..22364',
    'off x=62036..83808,y=39699..50848,z=16184..35241',
    'off x=57205..67911,y=-27350..-21517,z=-46756..-27443',
    'off x=62414..79995,y=-48813..-31326,z=-14997..-455',
    'off x=-36019..-2000,y=65362..83321,z=28014..49976',
    'on x=-82815..-56369,y=-21694..-13537,z=-46997..-24606',
    'off x=-8241..19923,y=26110..47089,z=-89019..-68637',
    'off x=41406..60196,y=367..21060,z=-70704..-43242',
    'off x=-9225..9919,y=-71759..-63342,z=-61884..-35658',
    'off x=21344..55409,y=30638..57388,z=40788..70545',
    'off x=63494..83068,y=-29655..-682,z=10880..30117',
    'on x=-32426..-15505,y=-65684..-54246,z=37005..61987',
    'on x=-72406..-52218,y=-41385..-36738,z=-11161..1691',
    'off x=-52540..-31478,y=56695..65511,z=-44399..-18394',
    'on x=57080..88806,y=3630..17742,z=21713..45202',
    'off x=56212..83988,y=19270..35602,z=-17285..-7191',
    'off x=35885..58295,y=-45932..-37154,z=-52551..-40498',
    'off x=5956..35309,y=62288..88246,z=9044..32130',
    'off x=66232..83758,y=-21317..-3366,z=25525..55530',
    'on x=13829..36901,y=-26228..-6363,z=-91708..-66711',
    'off x=-32985..-19828,y=34317..59897,z=-67155..-54867',
    'off x=41770..73943,y=45111..62837,z=20111..29494',
    'off x=-13108..7472,y=-75565..-48036,z=26521..50646',
    'off x=-12863..10581,y=49884..67182,z=-75435..-48525',
    'on x=-45314..-23740,y=50384..82344,z=7975..40667',
    'off x=29239..46015,y=-74070..-59105,z=4283..38014',
    'off x=1076..26445,y=-53867..-33051,z=-87324..-70069',
    'off x=44976..69921,y=5309..36285,z=27263..51265',
    'on x=-46471..-36215,y=32792..58115,z=-62759..-31784',
    'on x=-58361..-28000,y=1521..20429,z=48824..77384',
    'off x=-39096..-10005,y=58360..75674,z=-32233..-17910',
    'off x=4783..19229,y=-57235..-25169,z=-73400..-59801',
    'off x=34850..63892,y=-48499..-41462,z=28235..50978',
    'on x=-11706..-1176,y=-7656..14422,z=78665..97813',
    'on x=-6761..13527,y=-22991..-3655,z=74613..89826',
    'on x=2294..27656,y=-49060..-34370,z=-75820..-58299',
    'on x=-83426..-63012,y=-6688..19545,z=21176..44943',
    'on x=-41812..-22017,y=-62901..-27714,z=51151..65398',
    'on x=17534..30861,y=54417..69870,z=-64443..-33468',
    'off x=-30366..1224,y=54364..93022,z=-34531..-13485',
    'off x=-77755..-61099,y=-32833..-21630,z=-32021..-21327',
    'on x=-14485..-3984,y=-42928..-15375,z=-86912..-56712',
    'on x=-12117..10472,y=-76888..-74614,z=16854..36431',
    'off x=25654..40036,y=-90323..-70829,z=-11602..5072',
    'on x=13297..34064,y=72284..95822,z=3463..19778',
    'on x=-31875..-15199,y=62708..83242,z=-54162..-17234',
    'off x=-84173..-64212,y=15346..31401,z=-52730..-28317',
    'off x=-34457..-12316,y=12732..26740,z=-89885..-59140',
    'on x=21661..44248,y=-62275..-52884,z=-64237..-35005'];

//Part 1
// let instructions1 = {};
// for (let i = 0; i < 20; i++) {
//     let item = input[i];
//     let command = item.split(' ')[0];
//     let coords = item.split(' ')[1];
//     let xCoords = coords.split(',')[0].substring(2,);
//     let x1 = xCoords.split('..')[0];
//     let x2 = xCoords.split('..')[1];
//     let yCoords = coords.split(',')[1].substring(2,);
//     let y1 = yCoords.split('..')[0];
//     let y2 = yCoords.split('..')[1];
//     let zCoords = coords.split(',')[2].substring(2,);
//     let z1 = zCoords.split('..')[0];
//     let z2 = zCoords.split('..')[1];
//     instructions1[[[x1, x2], [y1, y2], [z1, z2]]] = command == 'on' ? 1 : 0;
// }

// let reactor1 = {};
// for (let i = -50; i < 50; i++) {
//     for (let j = -50; j < 50; j++) {
//         for (let k = -50; k < 50; k++) {
//             reactor1[[i, j, k]] = 0;
//         }
//     }
// }
// let reactor2 = Object.assign({}, reactor1);

// for (item in instructions1) {
//     let x1 = parseInt(item.split(',')[0]);
//     let x2 = parseInt(item.split(',')[1]);
//     let y1 = parseInt(item.split(',')[2]);
//     let y2 = parseInt(item.split(',')[3]);
//     let z1 = parseInt(item.split(',')[4]);
//     let z2 = parseInt(item.split(',')[5]);
//     let command = instructions1[item];
//     for (let i = x1; i <= x2; i++) {
//         for (let j = y1; j <= y2; j++) {
//             for (let k = z1; k <= z2; k++) {
//                 reactor1[[i, j, k]] = command;
//             }
//         }
//     }
// }
// console.log(Object.values(reactor1).filter((val) => val == 1).length);



//Part 2 - Incomplete
let instructions2 = {};
for (item of input) {
    let command = item.split(' ')[0];
    let coords = item.split(' ')[1];
    let xCoords = coords.split(',')[0].substring(2,);
    let x1 = xCoords.split('..')[0];
    let x2 = xCoords.split('..')[1];
    let yCoords = coords.split(',')[1].substring(2,);
    let y1 = yCoords.split('..')[0];
    let y2 = yCoords.split('..')[1];
    let zCoords = coords.split(',')[2].substring(2,);
    let z1 = zCoords.split('..')[0];
    let z2 = zCoords.split('..')[1];
    instructions2[[[x1, x2], [y1, y2], [z1, z2]]] = command == 'on' ? 1 : 0;
}

let reactor2 = {};
let j = 1;
for (item in instructions2) {
    console.log('computing instruction ' + j);
    let x1 = parseInt(item.split(',')[0]);
    let x2 = parseInt(item.split(',')[1]);
    let y1 = parseInt(item.split(',')[2]);
    let y2 = parseInt(item.split(',')[3]);
    let z1 = parseInt(item.split(',')[4]);
    let z2 = parseInt(item.split(',')[5]);
    let command = instructions2[item];
    for (let i = x1; i <= x2; i++) {
        for (let j = y1; j <= y2; j++) {
            for (let k = z1; k <= z2; k++) {
                reactor2[[i, j, k]] = command;
            }
        }
    }
    j += 1;
}
console.log(Object.values(reactor2).filter((val) => val == 1).length);
