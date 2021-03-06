function changeSelectItems () {
  var selectID = document.getElementById('select_tdoll')
  var str_items = ''
  if (set_guntype === 0) {
    str_items += '<option value=0 selected></option>'
  } else if (set_guntype === 1) { // HG
    if (num_star === 5) {
      str_items += '<option value=4 selected>No.4 蟒蛇</option>'
      str_items += '<option value=96>No.96 灰熊Mk V</option>'
      str_items += '<option value=97>No.97 M950A</option>'
      str_items += '<option value=114>No.114 维尔德Mk Ⅱ</option>'
      str_items += '<option value=126>No.126 NZ75</option>'
      str_items += '<option value=142>No.142 Five-seveN</option>'
      str_items += '<option value=166>No.166 CZ75</option>'
      str_items += '<option value=183>No.183 竞争者</option>'
      str_items += '<option value=233>No.233 Px4 风暴</option>'
      str_items += '<option value=242>No.242 P22</option>'
      str_items += '<option value=250>No.250 HS2000</option>'
      str_items += '<option value=1001>No.1 [MOD] 柯尔特左轮</option>'
      str_items += '<option value=2001>No.EX1 诺艾尔</option>'
      str_items += '<option value=2003>No.EX3 琪亚娜</option>'
      str_items += '<option value=2006>No.EX6 德丽莎</option>'
      str_items += '<option value=2009>No.EX9 克莉尔</option>'
      str_items += '<option value=2010>No.EX10 菲尔</option>'
    } else if (num_star === 4) {
      str_items += '<option value=1 selected>No.1 柯尔特左轮</option>'
      str_items += '<option value=7>No.7 斯捷奇金</option>'
      str_items += '<option value=98>No.98 SPP-1</option>'
      str_items += '<option value=99>No.99 MK23</option>'
      str_items += '<option value=100>No.100 P7</option>'
      str_items += '<option value=168>No.168 SpitFire</option>'
      str_items += '<option value=202>No.202 雷电</option>'
      str_items += '<option value=212>No.212 K5</option>'
      str_items += '<option value=248>No.248 杰里科</option>'
      str_items += '<option value=1002>No.2 [MOD] M1911</option>'
      str_items += '<option value=1005>No.5 [MOD] 纳甘左轮</option>'
      str_items += '<option value=1091>No.91 [MOD] MP-446</option>'
    } else if (num_star === 3) {
      str_items += '<option value=3 selected>No.3 M9</option>'
      str_items += '<option value=6>No.6 托卡列夫</option>'
      str_items += '<option value=8>No.8 马卡洛夫</option>'
      str_items += '<option value=11>No.11 P08</option>'
      str_items += '<option value=12>No.12 C96</option>'
      str_items += '<option value=13>No.13 92式</option>'
      str_items += '<option value=14>No.14 阿斯特拉左轮</option>'
      str_items += '<option value=15>No.15 格洛克17</option>'
      str_items += '<option value=113>No.113 谢尔久科夫</option>'
      str_items += '<option value=123>No.123 P99</option>'
      str_items += '<option value=132>No.132 59式</option>'
      str_items += '<option value=140>No.140 PSM</option>'
      str_items += '<option value=167>No.167 HK45</option>'
      str_items += '<option value=186>No.186 P226</option>'
      str_items += '<option value=210>No.210 CZ52</option>'
      str_items += '<option value=220>No.220 MP-443</option>'
      str_items += '<option value=221>No.221 GSh-18</option>'
      str_items += '<option value=232>No.232 MP-448</option>'
      str_items += '<option value=244>No.244 TEC-9</option>'
    } else if (num_star === 2) {
      str_items += '<option value=2 selected>No.2 M1911</option>'
      str_items += '<option value=5>No.5 纳甘左轮</option>'
      str_items += '<option value=9>No.9 P38</option>'
      str_items += '<option value=10>No.10 PPK</option>'
      str_items += '<option value=90>No.90 FNP-9</option>'
      str_items += '<option value=91>No.91 MP-446</option>'
      str_items += '<option value=139>No.139 Bren Ten</option>'
      str_items += '<option value=141>No.141 USP Compact</option>'
    }
  } else if (set_guntype === 2) { // AR
    if (num_star === 5) {
      str_items += '<option value=62 selected>No.62 G41</option>'
      str_items += '<option value=65>No.65 HK416</option>'
      str_items += '<option value=73>No.73 AUG</option>'
      str_items += '<option value=106>No.106 FAL</option>'
      str_items += '<option value=119>No.119 OTs-14</option>'
      str_items += '<option value=122>No.122 G11</option>'
      str_items += '<option value=129>No.129 95式</option>'
      str_items += '<option value=130>No.130 97式</option>'
      str_items += '<option value=172>No.172 RFB</option>'
      str_items += '<option value=175>No.175 ART556</option>'
      str_items += '<option value=181>No.181 T91</option>'
      str_items += '<option value=194>No.194 K2</option>'
      str_items += '<option value=196>No.196 Zas M21</option>'
      str_items += '<option value=205>No.205 AN-94</option>'
      str_items += '<option value=206>No.206 AK-12</option>'
      str_items += '<option value=215>No.215 MDR</option>'
      str_items += '<option value=236>No.236 K11</option>'
      str_items += '<option value=243>No.243 64式自</option>'
      str_items += '<option value=1055>No.55 [MOD] M4A1</option>'
      str_items += '<option value=1056>No.56 [MOD] M4 SOPMODⅡ</option>'
      str_items += '<option value=1057>No.57 [MOD] ST AR-15</option>'
      str_items += '<option value=1064>No.64 [MOD] G36</option>'
      str_items += '<option value=2007>No.EX7 无量塔姬子</option>'
    } else if (num_star === 4) {
      str_items += '<option value=54 selected>No.54 M16A1</option>'
      str_items += '<option value=55>No.55 M4A1</option>'
      str_items += '<option value=56>No.56 M4 SOPMODⅡ</option>'
      str_items += '<option value=57>No.57 ST AR-15</option>'
      str_items += '<option value=60>No.60 As Val</option>'
      str_items += '<option value=64>No.64 G36</option>'
      str_items += '<option value=66>No.66 56-1式</option>'
      str_items += '<option value=69>No.69 FAMAS</option>'
      str_items += '<option value=72>No.72 TAR-21</option>'
      str_items += '<option value=118>No.118 9A-91</option>'
      str_items += '<option value=171>No.171 利贝罗勒</option>'
      str_items += '<option value=187>No.187 AK 5</option>'
      str_items += '<option value=207>No.207 CZ2000</option>'
      str_items += '<option value=216>No.216 XM8</option>'
      str_items += '<option value=227>No.227 A-91</option>'
      str_items += '<option value=237>No.237 SAR-21</option>'
      str_items += '<option value=1063>No.63 [MOD] G3</option>'
    } else if (num_star === 3) {
      str_items += '<option value=58 selected>No.58 AK-47</option>'
      str_items += '<option value=61>No.61 StG44</option>'
      str_items += '<option value=70>No.70 FNC</option>'
      str_items += '<option value=105>No.105 OTs-12</option>'
      str_items += '<option value=108>No.108 CZ-805</option>'
      str_items += '<option value=120>No.120 ARX-160</option>'
      str_items += '<option value=134>No.134 AR70</option>'
      str_items += '<option value=138>No.138 6P62</option>'
      str_items += '<option value=170>No.170 ASh-12.7</option>'
      str_items += '<option value=193>No.193 T65</option>'
      str_items += '<option value=223>No.223 Model L</option>'
      str_items += '<option value=239>No.239 03式</option>'
    } else if (num_star === 2) {
      str_items += '<option value=63 selected>No.63 G3</option>'
      str_items += '<option value=68>No.68 L85A1</option>'
      str_items += '<option value=71>No.71 加利尔</option>'
      str_items += '<option value=74>No.74 SIG-510</option>'
      str_items += '<option value=107>No.107 F2000</option>'
      str_items += '<option value=133>No.133 63式</option>'
    }
  } else if (set_guntype === 3) { // SMG
    if (num_star === 5) {
      str_items += '<option value=16 selected>No.16 汤姆森</option>'
      str_items += '<option value=20>No.20 Vector</option>'
      str_items += '<option value=28>No.28 MP7</option>'
      str_items += '<option value=59>No.59 AK-74U</option>'
      str_items += '<option value=104>No.104 G36C</option>'
      str_items += '<option value=115>No.115 索米</option>'
      str_items += '<option value=127>No.127 79式</option>'
      str_items += '<option value=135>No.135 SR-3MP</option>'
      str_items += '<option value=143>No.143 RO635</option>'
      str_items += '<option value=213>No.213 C-MS</option>'
      str_items += '<option value=224>No.224 PM-06</option>'
      str_items += '<option value=228>No.228 樱花</option>'
      str_items += '<option value=234>No.234 JS 9</option>'
      str_items += '<option value=245>No.245 P90</option>'
      str_items += '<option value=251>No.251 X95</option>'
      str_items += '<option value=1103>No.103 [MOD] UMP45</option>'
    } else if (num_star === 4) {
      str_items += '<option value=23 selected>No.23 PP-90</option>'
      str_items += '<option value=26>No.26 MP5</option>'
      str_items += '<option value=101>No.101 UMP9</option>'
      str_items += '<option value=102>No.102 UMP40</option>'
      str_items += '<option value=103>No.103 UMP45</option>'
      str_items += '<option value=136>No.136 PP-19</option>'
      str_items += '<option value=137>No.137 PP-19-01</option>'
      str_items += '<option value=150>No.150 希普卡</option>'
      str_items += '<option value=177>No.177 KLIN</option>'
      str_items += '<option value=203>No.203 蜜獾</option>'
      str_items += '<option value=225>No.225 Cx4 风暴</option>'
      str_items += '<option value=1029>No.29 [MOD] 司登MkⅡ</option>'
      str_items += '<option value=1093>No.93 [MOD] IDW</option>'
      str_items += '<option value=1094>No.94 [MOD] 64式</option>'
    } else if (num_star === 3) {
      str_items += '<option value=18 selected>No.18 MAC-10</option>'
      str_items += '<option value=19>No.19 FMG-9</option > '
      str_items += '<option value=22>No.22 PPS-43</option>'
      str_items += '<option value=27>No.27 蝎式</option>'
      str_items += '<option value=29>No.29 司登MkⅡ</option>'
      str_items += '<option value=32>No.32 微型乌兹</option>'
      str_items += '<option value=116>No.116 Z-62</option>'
      str_items += '<option value=131>No.131 EVO-3</option>'
      str_items += '<option value=144>No.144 MT-9</option>'
      str_items += '<option value=169>No.169 SCW</option>'
      str_items += '<option value=176>No.176 TMP</option>'
      str_items += '<option value=178>No.178 F1</option>'
      str_items += '<option value=191>No.191 M12</option>'
      str_items += '<option value=209>No.209 OTs-39</option>'
      str_items += '<option value=218>No.218 T77</option>'
    } else if (num_star === 2) {
      str_items += '<option value=17 selected>No.17 M3</option>'
      str_items += '<option value=21>No.21 PPSh-41</option>'
      str_items += '<option value=24>No.24 PP-2000</option>'
      str_items += '<option value=25>No.25 MP40</option>'
      str_items += '<option value=31>No.31 伯莱塔38型</option>'
      str_items += '<option value=33>No.33 m45</option>'
      str_items += '<option value=92>No.92 Spectre M4</option>'
      str_items += '<option value=93>No.93 IDW</option>'
      str_items += '<option value=94>No.94 64式</option>'
    }
  } else if (set_guntype === 4) { // RF
    if (num_star === 5) {
      str_items += '<option value=46 selected>No.46 Kar98k</option>'
      str_items += '<option value=48>No.48 WA2000</option>'
      str_items += '<option value=50>No.50 李-恩菲尔德</option>'
      str_items += '<option value=53>No.53 NTW-20</option>'
      str_items += '<option value=128>No.128 M99</option>'
      str_items += '<option value=148>No.148 IWS2000</option>'
      str_items += '<option value=179>No.179 DSR-50</option>'
      str_items += '<option value=192>No.192 JS05</option>'
      str_items += '<option value=197>No.197 卡尔卡诺M1891</option>'
      str_items += '<option value=198>No.198 卡尔卡诺M91/38</option>'
      str_items += '<option value=204>No.204 芭莉斯塔</option>'
      str_items += '<option value=211>No.211 SRS</option>'
      str_items += '<option value=222>No.222 TAC-50</option>'
      str_items += '<option value=231>No.231 M82A1</option>'
      str_items += '<option value=257>No.257 M200</option>'
      str_items += '<option value=1039>No.39 [MOD] 莫辛-纳甘</option>'
      str_items += '<option value=2004>No.EX4 雷电芽衣</option>'
      str_items += '<option value=2005>No.EX5 布洛妮娅</option>'
    } else if (num_star === 4) {
      str_items += '<option value=36 selected>No.36 春田</option>'
      str_items += '<option value=39>No.39 莫辛-纳甘</option>'
      str_items += '<option value=42>No.42 PTRD</option>'
      str_items += '<option value=43>No.43 SVD</option>'
      str_items += '<option value=117>No.117 PSG-1</option>'
      str_items += '<option value=146>No.146 G28</option>'
      str_items += '<option value=180>No.180 PzB39</option>'
      str_items += '<option value=184>No.184 T-5000</option>'
      str_items += '<option value=200>No.200 XM3</option>'
      str_items += '<option value=226>No.226 Mk 12</option>'
      str_items += '<option value=235>No.235 SPR A3G</option>'
      str_items += '<option value=247>No.247 K31</option>'
      str_items += '<option value=252>No.252 KSVK</option>'
      str_items += '<option value=1037>No.37 [MOD] M14</option>'
      str_items += '<option value=1044>No.44 [MOD] SV-98</option>'
      str_items += '<option value=1051>No.51 [MOD] FN-49</option>'
    } else if (num_star === 3) {
      str_items += '<option value=34 selected>No.34 M1加兰德</option>'
      str_items += '<option value=35>No.35 M1A1</option>'
      str_items += '<option value=37>No.37 M14</option>'
      str_items += '<option value=38>No.38 M21</option>'
      str_items += '<option value=44>No.44 SV-98</option>'
      str_items += '<option value=49>No.49 56式半</option>'
      str_items += '<option value=95>No.95 汉阳造88式</option>'
      str_items += '<option value=124>No.124 Super SASS</option>'
      str_items += '<option value=145>No.145 OTs-44</option>'
      str_items += '<option value=147>No.147 SSG 69</option>'
      str_items += '<option value=174>No.174 八一式马</option>'
      str_items += '<option value=182>No.182 wz.92</option>'
      str_items += '<option value=201>No.201 猎豹M1</option>'
      str_items += '<option value=217>No.217 SM-1</option>'
      str_items += '<option value=230>No.230 OBR</option>'
      str_items += '<option value=241>No.241 RT-20</option>'
      str_items += '<option value=255>No.255 侦察者</option>'
    } else if (num_star === 2) {
      str_items += '<option value=40 selected>No.40 SVT-38</option>'
      str_items += '<option value=41>No.41 西蒙诺夫</option>'
      str_items += '<option value=47>No.47 G43</option>'
      str_items += '<option value=51>No.51 FN-49</option>'
      str_items += '<option value=52>No.52 BM59</option>'
    }
  } else if (set_guntype === 5) { // MG
    if (num_star === 5) {
      str_items += '<option value=109 selected>No.109 MG5</option>'
      str_items += '<option value=112>No.112 内格夫</option>'
      str_items += '<option value=125>No.125 MG4</option>'
      str_items += '<option value=173>No.173 PKP</option>'
      str_items += '<option value=208>No.208 HK21</option>'
      str_items += '<option value=238>No.238 88式</option>'
      str_items += '<option value=253>No.253 刘易斯</option>'
      str_items += '<option value=1075>No.75 [MOD] M1918</option>'
    } else if (num_star === 4) {
      str_items += '<option value=75 selected>No.75 M1918</option>'
      str_items += '<option value=78>No.78 M60</option>'
      str_items += '<option value=85>No.85 PK</option>'
      str_items += '<option value=88>No.88 MG3</option>'
      str_items += '<option value=121>No.121 Mk48</option>'
      str_items += '<option value=149>No.149 AEK-999</option>'
      str_items += '<option value=185>No.185 阿梅利</option>'
      str_items += '<option value=199>No.199 80式</option>'
      str_items += '<option value=240>No.240 Mk46</option>'
      str_items += '<option value=254>No.254 UKM-2000</option>'
      str_items += '<option value=1081>No.81 [MOD] LWMMG</option>'
      str_items += '<option value=1089>No.89 [MOD] 布伦</option>'
    } else if (num_star === 3) {
      str_items += '<option value=77 selected>No.77 M2HB</option>'
      str_items += '<option value=79>No.79 M249 SAW</option>'
      str_items += '<option value=80>No.80 M1919A4</option>'
      str_items += '<option value=84>No.84 RPD</option>'
      str_items += '<option value=86>No.86 MG42</option>'
      str_items += '<option value=89>No.89 布伦</option>'
      str_items += '<option value=195>No.195 HK23</option>'
      str_items += '<option value=249>No.249 62式</option>'
    } else if (num_star === 2) {
      str_items += '<option value=81 selected>No.81 LWMMG</option>'
      str_items += '<option value=82>No.82 DP28</option>'
      str_items += '<option value=87>No.87 MG34</option>'
      str_items += '<option value=110>No.110 FG42</option>'
      str_items += '<option value=111>No.111 AAT-52</option>'
    }
  } else if (set_guntype === 6) { // SG
    if (num_star === 5) {
      str_items += '<option value=151 selected>No.151 M1887</option>'
      str_items += '<option value=157>No.157 KSG</option>'
      str_items += '<option value=160>No.160 Saiga-12</option>'
      str_items += '<option value=163>No.163 AA-12</option>'
      str_items += '<option value=164>No.164 FP-6</option>'
      str_items += '<option value=188>No.188 S.A.T.8</option>'
      str_items += '<option value=229>No.229 M870</option>'
      str_items += '<option value=2002>No.EX2 艾尔菲尔特</option>'
      str_items += '<option value=2008>No.EX8 希儿</option>'
    } else if (num_star === 4) {
      str_items += '<option value=153 selected>No.153 M37</option>'
      str_items += '<option value=155>No.155 M590</option>'
      str_items += '<option value=156>No.156 Super-Shorty</option>'
      str_items += '<option value=161>No.161 97式霰</option>'
      str_items += '<option value=162>No.162 SPAS-12</option>'
      str_items += '<option value=165>No.165 M1014</option>'
      str_items += '<option value=189>No.189 USAS-12</option>'
    } else if (num_star === 3) {
      str_items += '<option value=152 selected>No.152 M897</option>'
      str_items += '<option value=154>No.154 M200</option>'
      str_items += '<option value=158>No.158 KS-23</option>'
      str_items += '<option value=159>No.159 RMb-93</option>'
      str_items += '<option value=190>No.190 NS2000</option>'
    }
  }
  if (switch_operate) {
    selectID.disabled = false
  } else {
    selectID.disabled = true
  }
  selectID.innerHTML = str_items
  changePreview(1)
}
function changeEquip () {
  var ID = parseInt(document.getElementById('select_tdoll').value)
  var selectID = document.getElementById('select_equip')
  var str_items = ''
  if (num_pickequip === 1) { // 第一格装备
    if (set_guntype === 1) { // HG
      str_items += '<option value=11>[消音器] AC4</option>'
      str_items += '<option value=41>[夜视仪] PEQ-16A</option>'
      if (ID === 1001) str_items += '<option value=11001>柯尔特左轮长枪管</option>' // 柯尔特左轮
      if (ID === 1005) str_items += '<option value=11005>纳甘左轮消音器</option>' // 纳甘左轮
      if (ID === 1091) str_items += '<option value=11091>MP446C比赛枪管</option>' // MP446
      if (ID === 2009) str_items += '<option value=42009>荣耀之光</option>'
      if (ID === 2010) str_items += '<option value=42010>漆黑之猫</option>'
    } else if (set_guntype === 2) { // AR
      if (ID != 54 && ID != 56 && ID != 57 && ID != 1056 && ID != 1057) {
        str_items += '<option value=12>[光瞄] VFL 6-24X56</option>'
        str_items += '<option value=14>[全息] EOT 518</option>'
        str_items += '<option value=13>[红点] ITI MARS</option>'
        str_items += '<option value=11>[消音器] AC4</option>'
        str_items += '<option value=41>[夜视仪] PEQ-16A</option>'
        if (ID === 65) str_items += '<option value=165>EOT-XPS3</option>'
        if (ID === 58 || ID === 66) str_items += '<option value=166>KSTSP</option>'
        if (ID === 69) str_items += '<option value=169>FÉLIN系统瞄具</option>'
        if (ID === 118) str_items += '<option value=4118>PKN03M夜视瞄具</option>'
        if (ID === 1063) str_items += '<option value=11063>G3改良枪管组</option>'
        if (ID === 1064) str_items += '<option value=11064>G36混合瞄准镜</option>'
      } else if (ID === 54) { // M16A1
        if (set_equip[2] != 32) str_items += '<option value=32>IOP T4外骨骼</option>'
        if (set_equip[2] != 31) str_items += '<option value=31>IOP X4外骨骼</option>'
        if (set_equip[2] != 33) str_items += '<option value=33>Type3防弹插板</option>'
        if (set_equip[2] != 354) str_items += '<option value=354>特殊战机动装甲</option>'
      } else {
        if (set_equip[2] != 12) str_items += '<option value=12>[光瞄] VFL 6-24X56</option>'
        if (set_equip[2] != 14) str_items += '<option value=14>[全息] EOT 518</option>'
        if (set_equip[2] != 13) str_items += '<option value=13>[红点] ITI MARS</option>'
        if (set_equip[2] != 11) str_items += '<option value=11>[消音器] AC4</option>'
        if (set_equip[2] != 41) str_items += '<option value=41>[夜视仪] PEQ-16A</option>'
        if (ID === 1056) {
          if (set_equip[2] != 11056) str_items += '<option value=11056>兵蚁型RO</option>'
        }
        if (ID === 1057) {
          if (set_equip[2] != 11057) str_items += '<option value=11057>轻量化导轨套件</option>'
        }
      }
    } else if (set_guntype === 3) { // SMG
      str_items += '<option value=32>IOP T4外骨骼</option>'
      str_items += '<option value=31>IOP X4外骨骼</option>'
      if (ID === 26) str_items += '<option value=326>GSG UX外骨骼</option>' // MP5
      if (ID === 101 || ID === 102 || ID === 103 || ID === 1103) str_items += '<option value=3103>UMP UX外骨骼</option>' // UMP系列
      if (ID === 1093) str_items += '<option value=31093>性能升级卡带</option>'
    } else if (set_guntype === 4) { // RF
      str_items += '<option value=12>[光瞄] VFL 6-24X56</option>'
      str_items += '<option value=14>[全息] EOT 518</option>'
      str_items += '<option value=13>[红点] ITI MARS</option>'
      str_items += '<option value=11>[消音器] AC4</option>'
      if (ID === 46) str_items += '<option value=146>PM 5-25X65</option>' // Kar98k
      if (ID === 1039) str_items += '<option value=11039>K6-24X56</option>' // 莫辛纳甘-MOD
      if (ID === 1037) str_items += '<option value=11037>M2两脚架</option>' // M14 MOD
      if (ID === 1051) str_items += '<option value=11051>快慢机板机组</option>' // FN49 MOD
    } else if (set_guntype === 5) { // MG
      str_items += '<option value=12>[光瞄] VFL 6-24X56</option>'
      str_items += '<option value=14>[全息] EOT 518</option>'
      str_items += '<option value=13>[红点] ITI MARS</option>'
      if (ID === 125) str_items += '<option value=1125>MG4用MGO</option>'
      if (ID === 1075) str_items += '<option value=11075>CT 4X20</option>'
      if (ID === 1081) str_items += '<option value=11081>MGO 6x48</option>'
      if (ID === 1089) str_items += '<option value=11089>布伦L4枪管组</option>'
    } else if (set_guntype === 6) { // SG
      str_items += '<option value=33>Type3防弹插板</option>'
    }
  } else if (num_pickequip === 2) { // 第二格装备（AR小队双瞄具/人形放在第三）
    if (set_guntype === 1) { // HG
      str_items += '<option value=21>ILM空尖弹</option>'
      if (ID === 1002) str_items += '<option value=21002>XM261短弹</option>' // M1911
      if (ID === 183) str_items += '<option value=23>Mk211高爆穿甲弹</option>'
    } else if (set_guntype === 2) { // AR
      str_items += '<option value=22>APCR高速弹</option>'
      if (ID === 138) str_items += '<option value=23>Mk211高爆穿甲弹</option>' // 6P62
      if (ID === 1057 || ID === 57) str_items += '<option value=21057>.300BLK高速弹</option>' // AR-15
    } else if (set_guntype === 3) { // SMG
      str_items += '<option value=21>ILM空尖弹</option>'
      if (ID === 213)  str_items += '<option value=23>Mk211高爆穿甲弹</option>' // CMS
    } else if (set_guntype === 4) { // RF
      str_items += '<option value=23>Mk211高爆穿甲弹</option>'
      if (ID === 36) str_items += '<option value=236>国家竞赛穿甲弹</option>' // 春田
    } else if (set_guntype === 5) { // MG
      str_items += '<option value=23>Mk211高爆穿甲弹</option>'
    } else if (set_guntype === 6) { // SG
      str_items += '<option value=24>#000猎鹿弹</option>'
      str_items += '<option value=25>SABOT独头弹</option>'
    }
  } else if (num_pickequip === 3) { // 第三格装备
    if (set_guntype === 1) { // HG
      str_items += '<option value=31>IOP X4外骨骼</option>'
      str_items += '<option value=32>IOP T4外骨骼</option>'
    } else if (set_guntype === 2) { // AR
      if (ID != 54 && ID != 56 && ID != 57 && ID != 1056 && ID != 1057) {
        str_items += '<option value=31>IOP X4外骨骼</option>'
        str_items += '<option value=32>IOP T4外骨骼</option>'
        if (ID === 62) str_items += '<option value=362>高性能战术发饰</option>' // G41
        if (ID === 1055) str_items += '<option value=31055>遗留的武器库</option>' // M4A1 mod
      } else if (ID === 54) { // M16A1
        if (set_equip[0] != 32) str_items += '<option value=32>IOP T4外骨骼</option>'
        if (set_equip[0] != 31) str_items += '<option value=31>IOP X4外骨骼</option>'
        if (set_equip[0] != 33) str_items += '<option value=33>Type3防弹插板</option>'
        if (set_equip[0] != 354) str_items += '<option value=354>特殊战机动装甲</option>'
      } else {
        if (set_equip[0] != 12) str_items += '<option value=12>[光瞄] VFL 6-24X56</option>'
        if (set_equip[0] != 14) str_items += '<option value=14>[全息] EOT 518</option>'
        if (set_equip[0] != 13) str_items += '<option value=13>[红点] ITI MARS</option>'
        if (set_equip[0] != 11) str_items += '<option value=11>[消音器] AC4</option>'
        if (set_equip[0] != 41) str_items += '<option value=41>[夜视仪] PEQ-16A</option>'
        if (ID === 1056) {
          if (set_equip[0] != 11056) str_items += '<option value=11056>兵蚁型RO</option>'
        }
        if (ID === 1057) {
          if (set_equip[0] != 11057) str_items += '<option value=11057>轻量化导轨套件</option>'
        }
      }
    } else if (set_guntype === 3) { // SMG
      str_items += '<option value=11>[消音器] AC4</option>'
      str_items += '<option value=14>[全息] EOT 518</option>'
      str_items += '<option value=13>[红点] ITI MARS</option>'
      str_items += '<option value=12>[光瞄] VFL 6-24X56</option>'
      str_items += '<option value=41>[夜视仪] PEQ-16A</option>'
      if (ID === 1029) str_items += '<option value=11029>司登专用消音器</option>'
      if (ID === 1103) str_items += '<option value=11103>附加运算模块</option>'
      if (ID === 1094) str_items += '<option value=11094>64专属消音器</option>'
    } else if (set_guntype === 4) { // RF
      str_items += '<option value=34>热光学迷彩披风</option>'
      if (ID === 42) str_items += '<option value=342>蓝色加厚披风</option>' // PTRD
      if (ID === 39 || ID === 1039) str_items += '<option value=31039>Hayha记忆芯片</option>' // 莫辛纳甘
      if (ID === 1044) str_items += '<option value=31044>数码迷彩披风</option>' // SV-98 MOD
    } else if (set_guntype === 5) { // MG
      str_items += '<option value=35>IOP极限弹链箱</option>'
      if (ID === 88) str_items += '<option value=388>无限弹链箱</option>' // MG3
      if (ID === 185) str_items += '<option value=3185>专用战术内存</option>' // 阿梅利
      if (ID === 75 || ID === 1075) str_items += '<option value=31075>Titan火控芯片</option>'
    } else if (set_guntype === 6) { // SG
      str_items += '<option value=13>[红点] ITI MARS</option>'
      str_items += '<option value=12>[光瞄] VFL 6-24X56</option>'
      str_items += '<option value=14>[全息] EOT 518</option>'
      str_items += '<option value=41>[夜视仪] PEQ-16A</option>'
    }
  }
  if (switch_operate && switch_equip) {
    selectID.disabled = false
    str_items += '<option value=0>无装备</option>'
  } else {
    selectID.disabled = true
    str_items += '<option value=-1></option>'
  }
  selectID.innerHTML = str_items
  selectID.value = set_equip[num_pickequip - 1]
}
