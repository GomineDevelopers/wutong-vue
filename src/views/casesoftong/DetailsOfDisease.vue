<template>
  <div class="DetailsOfDisease">
    <!-- <vue-headful title="病例通-疾病助手-病例详情"></vue-headful> -->
    <vue-headful title="病例详情"></vue-headful>
    <div class="disease_intro">
      <div :style="{height: '0.40rem'}"></div>
      <div class="d_title">{{d_title}}</div>
      <div :style="{height: '0.40rem'}"></div>
      <div class="d_intro">
        <div v-for="(item,index) in d_intro" :key="index + 'd1' ">
          <div>{{item}}</div>
        </div>
      </div>
    </div>
    <div :style="{height: '0.40rem'}"></div>
    <div class="disease_tabs">
      <van-tabs v-model="activeName">
        <van-tab title="指南" name="a">
          <div class="card1">
            <template v-for="(item,index) in Card1 ">
              <div class="PerRow" :key="index + 'Card1' ">
                <div
                  class="common_Stitle_font2 title_spaceRight inlineBlock common_Stitle_font4"
                >{{item.name}}</div>
                <div class="text_info theme_color5">
                  <!-- <span
                    class="participate participating"
                    v-if="item.status == '点击查看'"
                    @click="router_to('/sicknessdetail')"
                  >{{item.status}}</span>-->
                  <!-- 注意：这里指向对应pdf -->
                  <span
                    class="participate participating"
                    v-if="item.status == '点击查看'"
                  >{{item.status}}</span>
                  <van-icon @click="router_to('/sicknessdetail')" size="0.28rem" name="arrow" />
                </div>
                <div class="Q_time">{{item.time}}</div>
              </div>
            </template>
          </div>
        </van-tab>
        <van-tab title="药品库" name="b">
          <div class="card2">
            <van-collapse v-model="DrugMid" accordion>
              <template v-for="(item,index) in Card2 ">
                <van-collapse-item :name="item.id" class="menu" :key="index + 'Card2' ">
                  <div slot="title" class="ct_P">
                    <div class="coll_title">{{item.name}}</div>
                  </div>
                  <div :style="{height: '0.2rem'}"></div>
                  <div class="product">
                    <div class="product_c">
                      <div class="product_title">
                        <div class="product_title_l">产品参数</div>
                      </div>
                      <div :style="{height: '0.2rem'}"></div>
                      <div class="product_content">
                        <template v-for="(itemChild_1,index) in item.productContent ">
                          <div
                            :key="index + 'pc11' "
                            class="pc_row_font pc_row"
                            v-if="index%2 == 0"
                          >
                            <div class="pc_subtitle">{{itemChild_1.subtitle}}</div>
                            <div class="pc_intro">{{itemChild_1.intro}}</div>
                          </div>
                          <div
                            :key="index + 'pc11' "
                            class="pc_row_font pc_row2"
                            v-if="index%2 != 0"
                          >
                            <div class="pc_subtitle">{{itemChild_1.subtitle}}</div>
                            <div class="pc_intro">{{itemChild_1.intro}}</div>
                          </div>
                        </template>
                      </div>
                    </div>
                  </div>
                  <div :style="{height: '0.2rem'}"></div>
                  <div class="p_intro">
                    <div class="p_intro_title_l">产品说明</div>
                    <div :style="{height: '0.2rem'}"></div>
                    <div class="p_intro_font">
                      <template v-for="(itemChild_2,index) in item.infoArr ">
                        <p :key="index + 'DD' ">{{itemChild_2}}</p>
                      </template>
                    </div>
                  </div>
                </van-collapse-item>
              </template>
            </van-collapse>
          </div>
        </van-tab>

        <van-tab title="典型病例" name="c">
          <div class="card3">
            <van-collapse v-model="CaseMid" accordion>
              <template v-for="(C3Item,index) in Card3 ">
                <van-collapse-item :name="C3Item.id" class="menu" :key="index + 'Card2' ">
                  <div slot="title" class="ct_P">
                    <div class="coll_title">{{C3Item.name}}</div>
                  </div>
                  <div :style="{height: '0.2rem'}"></div>
                  <div class="p_intro">
                    <div>
                      <div class="p_intro_title_l">病史</div>
                      <div :style="{height: '0.2rem'}"></div>
                      <div class="p_intro_font">
                        <template v-for="(Item_I1,index) in C3Item.infoArr1 ">
                          <p :key="index + 'DDI1' ">{{Item_I1}}</p>
                        </template>
                      </div>
                    </div>
                    <div :style="{height: '0.2rem'}"></div>
                    <div>
                      <div class="p_intro_title_l">查体</div>
                      <div :style="{height: '0.2rem'}"></div>
                      <div class="p_intro_font">
                        <template v-for="(Item_I2,index) in C3Item.infoArr2 ">
                          <p :key="index + 'DDI1' ">{{Item_I2}}</p>
                        </template>
                      </div>
                    </div>
                  </div>
                </van-collapse-item>
              </template>
            </van-collapse>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailsOfDisease",
  components: {},
  data() {
    return {
      d_title: "糖尿病",
      d_intro: [
        "‧ 各种原因导致的体内糖调节和利用障碍。 ",
        "‧ 很常见。 ",
        "‧ 引发并发症可能危及生命。"
      ],
      activeName: "a",
      DrugMid: "1",
      CaseMid: "1",
      Card1: [
        {
          id: "1",
          name: "早期糖尿病的12大征兆",
          time: "2019-12-02",
          status: "点击查看"
        },
        {
          id: "2",
          name: "糖尿病的危害",
          time: "2019-12-02",
          status: "点击查看"
        },
        {
          id: "3",
          name: "如何预防糖尿病",
          time: "2019-12-02",
          status: "点击查看"
        },
        {
          id: "4",
          name: "您还在为“糖尿病”苦恼吗？",
          time: "2019-12-02",
          status: "点击查看"
        },
        {
          id: "5",
          name: "防止糖尿病六大法宝",
          time: "2019-12-02",
          status: "点击查看"
        },
        {
          id: "6",
          name: "如何看待糖尿病？",
          time: "2019-12-02",
          status: "点击查看"
        }
      ],
      Card2: [
        {
          id: "1",
          name: "金纳多（银杏叶提取物）",
          productContent: [
            {
              subtitle: "品牌",
              intro: "迪维"
            },
            {
              subtitle: "产品名",
              intro: "维A酸乳膏"
            },
            {
              subtitle: "规格",
              intro: "15g*1支/盒"
            },
            {
              subtitle: "用法",
              intro: "皮肤外用"
            },
            {
              subtitle: "剂型",
              intro: "乳膏"
            },
            {
              subtitle: "使用剂量",
              intro: "每晚一次，于睡前将药轻轻涂于患处"
            }
          ],
          infoArr: [
            "[用法用量]外用。寻常痤疮:每晚1次，于睡前将药轻轻涂于患处。银屑病、鱼鳞病等皮疹位于遮盖部位的可一日1-3次或遵医嘱。用毕应洗手。",
            "[不良反应]外用本品可能会引起皮肤刺激症状，如灼感、红斑及脱屑，可能使皮损更明显，但同时表明药物正在起作用，不是病情的加重。皮肤多半可适应及耐受，刺激现象可逐步消失。若刺激现象持续或加重，可在医师指导下间歇用药，或暂停用药。",
            "[禁忌] 1、对维生素A衍生物过敏者禁用。2、孕妇禁用。3、急性或亚急性皮炎、湿疹类皮肤病患者禁用。4、眼部禁用。",
            "[注意事项] 1、用药部位避免日光照射。2、 儿童慎用。3、 不应大面积使用。4、 不得用于皮肤破溃处。5、 哺乳期妇女在用药期间应停止哺乳，育龄妇女用药期间严禁受孕。6、 避免接触眼睛和其他黏膜(如口、鼻等)。7、用药部位如有烧灼感、瘙痒、红肿等情况应停药，并将局部药物洗净，必要时向医师咨询。8、用于治疗痤疮，起初数周可暂加剧，仍应继续治疗6周以上才能达到最大疗效。9、本品可能引起严重刺激或脱屑，不宜用于皮肤皱褶处。10、 对本品过敏者禁用，过敏体质者慎用。 11、 本品性状发生改变时禁止使用。 12、 请将本品放在儿童不能接触的地方。13、 儿童必须在成人监护下使用。14、 如正在使用其他药品，使用本品前请咨询医师或药师。",
            "请仔细阅读说明书并遵医嘱使用。"
          ]
        },
        {
          id: "2",
          name: "维A酸乳膏）",
          productContent: [
            {
              subtitle: "品牌",
              intro: "迪维"
            },
            {
              subtitle: "产品名",
              intro: "维A酸乳膏"
            },
            {
              subtitle: "规格",
              intro: "15g*1支/盒"
            },
            {
              subtitle: "用法",
              intro: "皮肤外用"
            },
            {
              subtitle: "剂型",
              intro: "乳膏"
            },
            {
              subtitle: "使用剂量",
              intro: "每晚一次，于睡前将药轻轻涂于患处"
            }
          ],

          infoArr: [
            "[用法用量]外用。寻常痤疮:每晚1次，于睡前将药轻轻涂于患处。银屑病、鱼鳞病等皮疹位于遮盖部位的可一日1-3次或遵医嘱。用毕应洗手。",
            "[不良反应]外用本品可能会引起皮肤刺激症状，如灼感、红斑及脱屑，可能使皮损更明显，但同时表明药物正在起作用，不是病情的加重。皮肤多半可适应及耐受，刺激现象可逐步消失。若刺激现象持续或加重，可在医师指导下间歇用药，或暂停用药。",
            "[禁忌] 1、对维生素A衍生物过敏者禁用。2、孕妇禁用。3、急性或亚急性皮炎、湿疹类皮肤病患者禁用。4、眼部禁用。",
            "[注意事项] 1、用药部位避免日光照射。2、 儿童慎用。3、 不应大面积使用。4、 不得用于皮肤破溃处。5、 哺乳期妇女在用药期间应停止哺乳，育龄妇女用药期间严禁受孕。6、 避免接触眼睛和其他黏膜(如口、鼻等)。7、用药部位如有烧灼感、瘙痒、红肿等情况应停药，并将局部药物洗净，必要时向医师咨询。8、用于治疗痤疮，起初数周可暂加剧，仍应继续治疗6周以上才能达到最大疗效。9、本品可能引起严重刺激或脱屑，不宜用于皮肤皱褶处。10、 对本品过敏者禁用，过敏体质者慎用。 11、 本品性状发生改变时禁止使用。 12、 请将本品放在儿童不能接触的地方。13、 儿童必须在成人监护下使用。14、 如正在使用其他药品，使用本品前请咨询医师或药师。",
            "请仔细阅读说明书并遵医嘱使用。"
          ]
        },
        {
          id: "3",
          name: "麦角骨化醇 ",
          productContent: [
            {
              subtitle: "品牌",
              intro: "迪维"
            },
            {
              subtitle: "产品名",
              intro: "维A酸乳膏"
            },
            {
              subtitle: "规格",
              intro: "15g*1支/盒"
            },
            {
              subtitle: "用法",
              intro: "皮肤外用"
            },
            {
              subtitle: "剂型",
              intro: "乳膏"
            },
            {
              subtitle: "使用剂量",
              intro: "每晚一次，于睡前将药轻轻涂于患处"
            }
          ],

          infoArr: [
            "[用法用量]外用。寻常痤疮:每晚1次，于睡前将药轻轻涂于患处。银屑病、鱼鳞病等皮疹位于遮盖部位的可一日1-3次或遵医嘱。用毕应洗手。",
            "[不良反应]外用本品可能会引起皮肤刺激症状，如灼感、红斑及脱屑，可能使皮损更明显，但同时表明药物正在起作用，不是病情的加重。皮肤多半可适应及耐受，刺激现象可逐步消失。若刺激现象持续或加重，可在医师指导下间歇用药，或暂停用药。",
            "[禁忌] 1、对维生素A衍生物过敏者禁用。2、孕妇禁用。3、急性或亚急性皮炎、湿疹类皮肤病患者禁用。4、眼部禁用。",
            "[注意事项] 1、用药部位避免日光照射。2、 儿童慎用。3、 不应大面积使用。4、 不得用于皮肤破溃处。5、 哺乳期妇女在用药期间应停止哺乳，育龄妇女用药期间严禁受孕。6、 避免接触眼睛和其他黏膜(如口、鼻等)。7、用药部位如有烧灼感、瘙痒、红肿等情况应停药，并将局部药物洗净，必要时向医师咨询。8、用于治疗痤疮，起初数周可暂加剧，仍应继续治疗6周以上才能达到最大疗效。9、本品可能引起严重刺激或脱屑，不宜用于皮肤皱褶处。10、 对本品过敏者禁用，过敏体质者慎用。 11、 本品性状发生改变时禁止使用。 12、 请将本品放在儿童不能接触的地方。13、 儿童必须在成人监护下使用。14、 如正在使用其他药品，使用本品前请咨询医师或药师。",
            "请仔细阅读说明书并遵医嘱使用。"
          ]
        },
        {
          id: "4",
          name: "维生素D3",
          productContent: [
            {
              subtitle: "品牌",
              intro: "迪维"
            },
            {
              subtitle: "产品名",
              intro: "维A酸乳膏"
            },
            {
              subtitle: "规格",
              intro: "15g*1支/盒"
            },
            {
              subtitle: "用法",
              intro: "皮肤外用"
            },
            {
              subtitle: "剂型",
              intro: "乳膏"
            },
            {
              subtitle: "使用剂量",
              intro: "每晚一次，于睡前将药轻轻涂于患处"
            }
          ],

          infoArr: [
            "[用法用量]外用。寻常痤疮:每晚1次，于睡前将药轻轻涂于患处。银屑病、鱼鳞病等皮疹位于遮盖部位的可一日1-3次或遵医嘱。用毕应洗手。",
            "[不良反应]外用本品可能会引起皮肤刺激症状，如灼感、红斑及脱屑，可能使皮损更明显，但同时表明药物正在起作用，不是病情的加重。皮肤多半可适应及耐受，刺激现象可逐步消失。若刺激现象持续或加重，可在医师指导下间歇用药，或暂停用药。",
            "[禁忌] 1、对维生素A衍生物过敏者禁用。2、孕妇禁用。3、急性或亚急性皮炎、湿疹类皮肤病患者禁用。4、眼部禁用。",
            "[注意事项] 1、用药部位避免日光照射。2、 儿童慎用。3、 不应大面积使用。4、 不得用于皮肤破溃处。5、 哺乳期妇女在用药期间应停止哺乳，育龄妇女用药期间严禁受孕。6、 避免接触眼睛和其他黏膜(如口、鼻等)。7、用药部位如有烧灼感、瘙痒、红肿等情况应停药，并将局部药物洗净，必要时向医师咨询。8、用于治疗痤疮，起初数周可暂加剧，仍应继续治疗6周以上才能达到最大疗效。9、本品可能引起严重刺激或脱屑，不宜用于皮肤皱褶处。10、 对本品过敏者禁用，过敏体质者慎用。 11、 本品性状发生改变时禁止使用。 12、 请将本品放在儿童不能接触的地方。13、 儿童必须在成人监护下使用。14、 如正在使用其他药品，使用本品前请咨询医师或药师。",
            "请仔细阅读说明书并遵医嘱使用。"
          ]
        },
        {
          id: "5",
          name: "维生素E",
          productContent: [
            {
              subtitle: "品牌",
              intro: "迪维"
            },
            {
              subtitle: "产品名",
              intro: "维A酸乳膏"
            },
            {
              subtitle: "规格",
              intro: "15g*1支/盒"
            },
            {
              subtitle: "用法",
              intro: "皮肤外用"
            },
            {
              subtitle: "剂型",
              intro: "乳膏"
            },
            {
              subtitle: "使用剂量",
              intro: "每晚一次，于睡前将药轻轻涂于患处"
            }
          ],
          infoArr: [
            "[用法用量]外用。寻常痤疮:每晚1次，于睡前将药轻轻涂于患处。银屑病、鱼鳞病等皮疹位于遮盖部位的可一日1-3次或遵医嘱。用毕应洗手。",
            "[不良反应]外用本品可能会引起皮肤刺激症状，如灼感、红斑及脱屑，可能使皮损更明显，但同时表明药物正在起作用，不是病情的加重。皮肤多半可适应及耐受，刺激现象可逐步消失。若刺激现象持续或加重，可在医师指导下间歇用药，或暂停用药。",
            "[禁忌] 1、对维生素A衍生物过敏者禁用。2、孕妇禁用。3、急性或亚急性皮炎、湿疹类皮肤病患者禁用。4、眼部禁用。",
            "[注意事项] 1、用药部位避免日光照射。2、 儿童慎用。3、 不应大面积使用。4、 不得用于皮肤破溃处。5、 哺乳期妇女在用药期间应停止哺乳，育龄妇女用药期间严禁受孕。6、 避免接触眼睛和其他黏膜(如口、鼻等)。7、用药部位如有烧灼感、瘙痒、红肿等情况应停药，并将局部药物洗净，必要时向医师咨询。8、用于治疗痤疮，起初数周可暂加剧，仍应继续治疗6周以上才能达到最大疗效。9、本品可能引起严重刺激或脱屑，不宜用于皮肤皱褶处。10、 对本品过敏者禁用，过敏体质者慎用。 11、 本品性状发生改变时禁止使用。 12、 请将本品放在儿童不能接触的地方。13、 儿童必须在成人监护下使用。14、 如正在使用其他药品，使用本品前请咨询医师或药师。",
            "请仔细阅读说明书并遵医嘱使用。"
          ]
        },
        {
          id: "6",
          name: "硝酸异山梨酯",
          productContent: [
            {
              subtitle: "品牌",
              intro: "迪维"
            },
            {
              subtitle: "产品名",
              intro: "维A酸乳膏"
            },
            {
              subtitle: "规格",
              intro: "15g*1支/盒"
            },
            {
              subtitle: "用法",
              intro: "皮肤外用"
            },
            {
              subtitle: "剂型",
              intro: "乳膏"
            },
            {
              subtitle: "使用剂量",
              intro: "每晚一次，于睡前将药轻轻涂于患处"
            }
          ],
          infoArr: [
            "[用法用量]外用。寻常痤疮:每晚1次，于睡前将药轻轻涂于患处。银屑病、鱼鳞病等皮疹位于遮盖部位的可一日1-3次或遵医嘱。用毕应洗手。",
            "[不良反应]外用本品可能会引起皮肤刺激症状，如灼感、红斑及脱屑，可能使皮损更明显，但同时表明药物正在起作用，不是病情的加重。皮肤多半可适应及耐受，刺激现象可逐步消失。若刺激现象持续或加重，可在医师指导下间歇用药，或暂停用药。",
            "[禁忌] 1、对维生素A衍生物过敏者禁用。2、孕妇禁用。3、急性或亚急性皮炎、湿疹类皮肤病患者禁用。4、眼部禁用。",
            "[注意事项] 1、用药部位避免日光照射。2、 儿童慎用。3、 不应大面积使用。4、 不得用于皮肤破溃处。5、 哺乳期妇女在用药期间应停止哺乳，育龄妇女用药期间严禁受孕。6、 避免接触眼睛和其他黏膜(如口、鼻等)。7、用药部位如有烧灼感、瘙痒、红肿等情况应停药，并将局部药物洗净，必要时向医师咨询。8、用于治疗痤疮，起初数周可暂加剧，仍应继续治疗6周以上才能达到最大疗效。9、本品可能引起严重刺激或脱屑，不宜用于皮肤皱褶处。10、 对本品过敏者禁用，过敏体质者慎用。 11、 本品性状发生改变时禁止使用。 12、 请将本品放在儿童不能接触的地方。13、 儿童必须在成人监护下使用。14、 如正在使用其他药品，使用本品前请咨询医师或药师。",
            "请仔细阅读说明书并遵医嘱使用。"
          ]
        },
        {
          id: "7",
          name: "环磷酰胺",
          productContent: [
            {
              subtitle: "品牌",
              intro: "迪维"
            },
            {
              subtitle: "产品名",
              intro: "维A酸乳膏"
            },
            {
              subtitle: "规格",
              intro: "15g*1支/盒"
            },
            {
              subtitle: "用法",
              intro: "皮肤外用"
            },
            {
              subtitle: "剂型",
              intro: "乳膏"
            },
            {
              subtitle: "使用剂量",
              intro: "每晚一次，于睡前将药轻轻涂于患处"
            }
          ],
          infoArr: [
            "[用法用量]外用。寻常痤疮:每晚1次，于睡前将药轻轻涂于患处。银屑病、鱼鳞病等皮疹位于遮盖部位的可一日1-3次或遵医嘱。用毕应洗手。",
            "[不良反应]外用本品可能会引起皮肤刺激症状，如灼感、红斑及脱屑，可能使皮损更明显，但同时表明药物正在起作用，不是病情的加重。皮肤多半可适应及耐受，刺激现象可逐步消失。若刺激现象持续或加重，可在医师指导下间歇用药，或暂停用药。",
            "[禁忌] 1、对维生素A衍生物过敏者禁用。2、孕妇禁用。3、急性或亚急性皮炎、湿疹类皮肤病患者禁用。4、眼部禁用。",
            "[注意事项] 1、用药部位避免日光照射。2、 儿童慎用。3、 不应大面积使用。4、 不得用于皮肤破溃处。5、 哺乳期妇女在用药期间应停止哺乳，育龄妇女用药期间严禁受孕。6、 避免接触眼睛和其他黏膜(如口、鼻等)。7、用药部位如有烧灼感、瘙痒、红肿等情况应停药，并将局部药物洗净，必要时向医师咨询。8、用于治疗痤疮，起初数周可暂加剧，仍应继续治疗6周以上才能达到最大疗效。9、本品可能引起严重刺激或脱屑，不宜用于皮肤皱褶处。10、 对本品过敏者禁用，过敏体质者慎用。 11、 本品性状发生改变时禁止使用。 12、 请将本品放在儿童不能接触的地方。13、 儿童必须在成人监护下使用。14、 如正在使用其他药品，使用本品前请咨询医师或药师。",
            "请仔细阅读说明书并遵医嘱使用。"
          ]
        }
      ],
      // Card2: [
      //   {
      //     id: "1",
      //     img: require("@/assets/pic/drug.jpg"),
      //     name: "金纳多",
      //     intro: "银杏叶提取物",
      //     intro2: "脑部、周围血液循环障碍"
      //   },
      //   {
      //     id: "2",
      //     img: require("@/assets/pic/drug.jpg"),
      //     name: "金纳多",
      //     intro: "银杏叶提取物",
      //     intro2: "脑部、周围血液循环障碍"
      //   }
      // ],
      Card3: [
        {
          id: "1",
          name: "糖尿病的病例",
          infoArr1: [
            "患者女，50岁，因“发现血压升高8年，晕厥数次”入院。入院前8年，患者多次测量发现血压升高，最高达230/100mmHg,自服美托洛尔、复方降压片等控制血压尚可，伴头晕、头痛、乏力，曾多次无明显诱因发生晕厥，伴有意识丧失，与体位改变无关，持续数分钟后意识恢复,无视物旋转、双眼凝视、胸闷、胸痛、恶心、呕吐、四肢抽搐麻木、舌咬伤等症状，患者患病以来精神食欲可，大小便正常,睡眠正常，体重无明显变化。糖尿病史9年，自服降糖药,未进一步诊治;否认先心病、癫痫、肾脏病等基础疾病史;无外伤史;否认烟酒嗜好史;已停经，既往月经正常，已婚已育;家族中无晕厥史。"
          ],
          infoArr2: [
            "体温36.7°C,脉率79次/分,呼吸率20次/分,血压145/92mmHg,步入病房,发育正常,无多毛、痤疮及满月脸,营养中等，神志清醒，查体合作。皮肤黏膜无黄染及紫绀，全身浅表淋巴结未见明显肿大。头颅五官无畸形,颈软无抵抗，颈静脉充盈，甲状腺未扪及肿大。胸廓对称，双肺呼吸音清,未闻及明显干湿哕音。心界不大，心率7次1分，律齐，主动脉瓣听诊区第二心音(A2)大于肺动脉瓣听诊区第二心音(P2),各瓣膜区未闻及明显杂音。腹软，剑突下及，上腹轻压痛，无反.跳痛、肌紧张，肝脾未扪及，肝肾区无叩痛,移动性浊音阴性。双下肢不肿，四肢肌力正常，生理反射存在，病理反射未引出。双侧肢体脉搏正常,血压差<5mmHg,颈、胸、腹及双肾区均未闻及明显血管杂音。"
          ]
        },
        {
          id: "2",
          name: "糖尿病的病例",
          infoArr1: [
            "患者女，50岁，因“发现血压升高8年，晕厥数次”入院。入院前8年，患者多次测量发现血压升高，最高达230/100mmHg,自服美托洛尔、复方降压片等控制血压尚可，伴头晕、头痛、乏力，曾多次无明显诱因发生晕厥，伴有意识丧失，与体位改变无关，持续数分钟后意识恢复,无视物旋转、双眼凝视、胸闷、胸痛、恶心、呕吐、四肢抽搐麻木、舌咬伤等症状，患者患病以来精神食欲可，大小便正常,睡眠正常，体重无明显变化。糖尿病史9年，自服降糖药,未进一步诊治;否认先心病、癫痫、肾脏病等基础疾病史;无外伤史;否认烟酒嗜好史;已停经，既往月经正常，已婚已育;家族中无晕厥史。"
          ],
          infoArr2: [
            "体温36.7°C,脉率79次/分,呼吸率20次/分,血压145/92mmHg,步入病房,发育正常,无多毛、痤疮及满月脸,营养中等，神志清醒，查体合作。皮肤黏膜无黄染及紫绀，全身浅表淋巴结未见明显肿大。头颅五官无畸形,颈软无抵抗，颈静脉充盈，甲状腺未扪及肿大。胸廓对称，双肺呼吸音清,未闻及明显干湿哕音。心界不大，心率7次1分，律齐，主动脉瓣听诊区第二心音(A2)大于肺动脉瓣听诊区第二心音(P2),各瓣膜区未闻及明显杂音。腹软，剑突下及，上腹轻压痛，无反.跳痛、肌紧张，肝脾未扪及，肝肾区无叩痛,移动性浊音阴性。双下肢不肿，四肢肌力正常，生理反射存在，病理反射未引出。双侧肢体脉搏正常,血压差<5mmHg,颈、胸、腹及双肾区均未闻及明显血管杂音。"
          ]
        },
        {
          id: "3",
          name: "糖尿病的病例",
          infoArr1: [
            "患者女，50岁，因“发现血压升高8年，晕厥数次”入院。入院前8年，患者多次测量发现血压升高，最高达230/100mmHg,自服美托洛尔、复方降压片等控制血压尚可，伴头晕、头痛、乏力，曾多次无明显诱因发生晕厥，伴有意识丧失，与体位改变无关，持续数分钟后意识恢复,无视物旋转、双眼凝视、胸闷、胸痛、恶心、呕吐、四肢抽搐麻木、舌咬伤等症状，患者患病以来精神食欲可，大小便正常,睡眠正常，体重无明显变化。糖尿病史9年，自服降糖药,未进一步诊治;否认先心病、癫痫、肾脏病等基础疾病史;无外伤史;否认烟酒嗜好史;已停经，既往月经正常，已婚已育;家族中无晕厥史。"
          ],
          infoArr2: [
            "体温36.7°C,脉率79次/分,呼吸率20次/分,血压145/92mmHg,步入病房,发育正常,无多毛、痤疮及满月脸,营养中等，神志清醒，查体合作。皮肤黏膜无黄染及紫绀，全身浅表淋巴结未见明显肿大。头颅五官无畸形,颈软无抵抗，颈静脉充盈，甲状腺未扪及肿大。胸廓对称，双肺呼吸音清,未闻及明显干湿哕音。心界不大，心率7次1分，律齐，主动脉瓣听诊区第二心音(A2)大于肺动脉瓣听诊区第二心音(P2),各瓣膜区未闻及明显杂音。腹软，剑突下及，上腹轻压痛，无反.跳痛、肌紧张，肝脾未扪及，肝肾区无叩痛,移动性浊音阴性。双下肢不肿，四肢肌力正常，生理反射存在，病理反射未引出。双侧肢体脉搏正常,血压差<5mmHg,颈、胸、腹及双肾区均未闻及明显血管杂音。"
          ]
        },
        {
          id: "4",
          name: "糖尿病的病例",
          infoArr1: [
            "患者女，50岁，因“发现血压升高8年，晕厥数次”入院。入院前8年，患者多次测量发现血压升高，最高达230/100mmHg,自服美托洛尔、复方降压片等控制血压尚可，伴头晕、头痛、乏力，曾多次无明显诱因发生晕厥，伴有意识丧失，与体位改变无关，持续数分钟后意识恢复,无视物旋转、双眼凝视、胸闷、胸痛、恶心、呕吐、四肢抽搐麻木、舌咬伤等症状，患者患病以来精神食欲可，大小便正常,睡眠正常，体重无明显变化。糖尿病史9年，自服降糖药,未进一步诊治;否认先心病、癫痫、肾脏病等基础疾病史;无外伤史;否认烟酒嗜好史;已停经，既往月经正常，已婚已育;家族中无晕厥史。"
          ],
          infoArr2: [
            "体温36.7°C,脉率79次/分,呼吸率20次/分,血压145/92mmHg,步入病房,发育正常,无多毛、痤疮及满月脸,营养中等，神志清醒，查体合作。皮肤黏膜无黄染及紫绀，全身浅表淋巴结未见明显肿大。头颅五官无畸形,颈软无抵抗，颈静脉充盈，甲状腺未扪及肿大。胸廓对称，双肺呼吸音清,未闻及明显干湿哕音。心界不大，心率7次1分，律齐，主动脉瓣听诊区第二心音(A2)大于肺动脉瓣听诊区第二心音(P2),各瓣膜区未闻及明显杂音。腹软，剑突下及，上腹轻压痛，无反.跳痛、肌紧张，肝脾未扪及，肝肾区无叩痛,移动性浊音阴性。双下肢不肿，四肢肌力正常，生理反射存在，病理反射未引出。双侧肢体脉搏正常,血压差<5mmHg,颈、胸、腹及双肾区均未闻及明显血管杂音。"
          ]
        },
        {
          id: "5",
          name: "糖尿病的病例",
          infoArr1: [
            "患者女，50岁，因“发现血压升高8年，晕厥数次”入院。入院前8年，患者多次测量发现血压升高，最高达230/100mmHg,自服美托洛尔、复方降压片等控制血压尚可，伴头晕、头痛、乏力，曾多次无明显诱因发生晕厥，伴有意识丧失，与体位改变无关，持续数分钟后意识恢复,无视物旋转、双眼凝视、胸闷、胸痛、恶心、呕吐、四肢抽搐麻木、舌咬伤等症状，患者患病以来精神食欲可，大小便正常,睡眠正常，体重无明显变化。糖尿病史9年，自服降糖药,未进一步诊治;否认先心病、癫痫、肾脏病等基础疾病史;无外伤史;否认烟酒嗜好史;已停经，既往月经正常，已婚已育;家族中无晕厥史。"
          ],
          infoArr2: [
            "体温36.7°C,脉率79次/分,呼吸率20次/分,血压145/92mmHg,步入病房,发育正常,无多毛、痤疮及满月脸,营养中等，神志清醒，查体合作。皮肤黏膜无黄染及紫绀，全身浅表淋巴结未见明显肿大。头颅五官无畸形,颈软无抵抗，颈静脉充盈，甲状腺未扪及肿大。胸廓对称，双肺呼吸音清,未闻及明显干湿哕音。心界不大，心率7次1分，律齐，主动脉瓣听诊区第二心音(A2)大于肺动脉瓣听诊区第二心音(P2),各瓣膜区未闻及明显杂音。腹软，剑突下及，上腹轻压痛，无反.跳痛、肌紧张，肝脾未扪及，肝肾区无叩痛,移动性浊音阴性。双下肢不肿，四肢肌力正常，生理反射存在，病理反射未引出。双侧肢体脉搏正常,血压差<5mmHg,颈、胸、腹及双肾区均未闻及明显血管杂音。"
          ]
        },
        {
          id: "6",
          name: "糖尿病的病例",
          infoArr1: [
            "患者女，50岁，因“发现血压升高8年，晕厥数次”入院。入院前8年，患者多次测量发现血压升高，最高达230/100mmHg,自服美托洛尔、复方降压片等控制血压尚可，伴头晕、头痛、乏力，曾多次无明显诱因发生晕厥，伴有意识丧失，与体位改变无关，持续数分钟后意识恢复,无视物旋转、双眼凝视、胸闷、胸痛、恶心、呕吐、四肢抽搐麻木、舌咬伤等症状，患者患病以来精神食欲可，大小便正常,睡眠正常，体重无明显变化。糖尿病史9年，自服降糖药,未进一步诊治;否认先心病、癫痫、肾脏病等基础疾病史;无外伤史;否认烟酒嗜好史;已停经，既往月经正常，已婚已育;家族中无晕厥史。"
          ],
          infoArr2: [
            "体温36.7°C,脉率79次/分,呼吸率20次/分,血压145/92mmHg,步入病房,发育正常,无多毛、痤疮及满月脸,营养中等，神志清醒，查体合作。皮肤黏膜无黄染及紫绀，全身浅表淋巴结未见明显肿大。头颅五官无畸形,颈软无抵抗，颈静脉充盈，甲状腺未扪及肿大。胸廓对称，双肺呼吸音清,未闻及明显干湿哕音。心界不大，心率7次1分，律齐，主动脉瓣听诊区第二心音(A2)大于肺动脉瓣听诊区第二心音(P2),各瓣膜区未闻及明显杂音。腹软，剑突下及，上腹轻压痛，无反.跳痛、肌紧张，肝脾未扪及，肝肾区无叩痛,移动性浊音阴性。双下肢不肿，四肢肌力正常，生理反射存在，病理反射未引出。双侧肢体脉搏正常,血压差<5mmHg,颈、胸、腹及双肾区均未闻及明显血管杂音。"
          ]
        }
      ]
    };
  },
  mounted() {
    let vm = this;
  },
  methods: {
    router_to(str, p_id) {
      let vm = this;
      // 待添加query 对应 pid
      vm.$router.push({ path: str });
    }
  }
};
</script>
<style>
/* ******** 标签 */
.DetailsOfDisease .van-tabs {
  width: 6.8rem;
}
.DetailsOfDisease .van-tabs--line .van-tabs__wrap {
  height: 0.88rem;
}
.DetailsOfDisease .van-tabs__nav{
  background: transparent;
}
.DetailsOfDisease .van-hairline--top-bottom::after, 
.DetailsOfDisease .van-hairline-unset--top-bottom::after {
    border-width: 0;
}
.DetailsOfDisease [class*=van-hairline]::after {
    border-color: #4A5677;
}
.DetailsOfDisease .van-tab {
  color: #858B9C;
}
.DetailsOfDisease .van-tab__text {
  font-size: 0.28rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
}
.DetailsOfDisease .van-tab--active {
  color: #55EBA2;
}
.DetailsOfDisease .van-tabs__line {
  background-color: #55EBA2;
  width: 14% !important;
}
.DetailsOfDisease .van-cell{
  background: transparent;
  color: #fff;
}
.DetailsOfDisease .van-cell:not(:last-child)::after{
  border-color: #4A5677
}
.DetailsOfDisease .van-collapse-item__content{
  margin: 0.4rem 0;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.1rem;
}
/* ******** 弹出层 */
.DetailsOfDisease .van-popup {
  background-color: rgba(0, 0, 0, 0);
}

/* ******** 图标 */
.DetailsOfDisease .c2_content_c .van-icon {
  font-size: 0.5rem;
  margin-top: 0.34rem;
  margin-left: 0.52rem;
  vertical-align: top;
  color: #efeff4;
}

/* ******* icon */
.DetailsOfDisease .PerRow .van-icon {
  vertical-align: top;
  margin-top: 0.06rem;
}
/* ******* card2 折叠面板 */

.DetailsOfDisease .van-cell__right-icon {
  /* margin-left: 5px; */
  color: #969799;
  height: 1.2rem;
  line-height: 1.2rem;
}
.DetailsOfDisease .van-collapse-item__content {
  padding: 0;
}
</style>
<style scoped>
.DetailsOfDisease {
  padding: 0 0.4rem;
}

.DetailsOfDisease .d_title {
  height: 0.56rem;
  height: 0.56rem;
  font-size: 0.4rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #fff;
  line-height: 0.56rem;
  letter-spacing: 2px;
}
.DetailsOfDisease .d_intro {
  height: 1.2rem;
  height: 1.2rem;
  font-size: 0.26rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #fff;
  line-height: 0.4rem;
  letter-spacing: 1px;
}

/* ******** card1 */

.DetailsOfDisease .PerRow {
  height: 0.83rem;
  /* width: 100%; */
  /* width: 6.8rem; */
  border-bottom: 1px #4A5677 solid;
  padding: 0.46rem 0rem 0.21rem 0.32rem;
}

.DetailsOfDisease .title_spaceRight {
  margin-right: 0rem;
}
.DetailsOfDisease .participate {
  width: 1.5rem;
  height: 0.4rem;
  font-size: 0.28rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  line-height: 0.4rem;
  letter-spacing: 0.01rem;
  vertical-align: top;
  margin-right: 0.24rem;
}
.DetailsOfDisease .participating {
  color: #55EBA2;
}
.DetailsOfDisease .participated {
  color: rgba(197, 202, 213, 1);
}
.DetailsOfDisease .text_info {
  display: inline-block !important;
  text-align: right !important;
  height: 0.32rem;
  /* width: 2.6rem; */
  vertical-align: top;
  margin-left: 0.3rem;
}
.DetailsOfDisease .Q_time {
  height: 0.28rem;
  font-size: 0.2rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(197, 202, 213, 1);
  line-height: 0.28rem;
  letter-spacing: 0.01rem;
  vertical-align: top;
  display: inline-block;
  width: 100%;
  margin-top: -0.6rem;
}

/* ******** card2 */
.DetailsOfDisease .card2 {
}
.DetailsOfDisease .ct_P {
  line-height: 1.2rem;
  height: 1.2rem;
  display: flex;
  align-items: center;
}
.DetailsOfDisease .coll_title {
  display: inline-block;
  height: 0.32rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #fff;
  line-height: 0.32rem;
}

/* 重复 - 产品参数 产品说明 */
.DetailsOfDisease .product {
  width: 100%;
  background: transparent;
}
.DetailsOfDisease .product_c {
  /* margin: 0 0.32rem; */
  margin: 0 0rem;
  padding: 0.32rem 0.28rem 0.33rem 0.28rem;
  height: 4.73rem;
  border-radius: 0.2rem;
}
.DetailsOfDisease .product_title {
  height: 0.45rem;
}
.DetailsOfDisease .product_content {
  height: auto;
}
.DetailsOfDisease .product_title_l {
  width: 4.9rem;
  height: 0.45rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #fff;
  line-height: 0.45rem;
  display: inline-block;
  vertical-align: top;
}
.DetailsOfDisease .product_title_r {
  height: 0.37rem;
  font-size: 0.26rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #55EBA2;
  line-height: 0.37rem;
  display: inline-block;
  vertical-align: top;
}
/* .DetailsOfDisease .pc_row {
  background: rgba(249, 250, 251, 1);
}
.DetailsOfDisease .pc_row2 {
  background: rgba(255, 255, 255, 1);
} */
.DetailsOfDisease .pc_row_font {
  width: 6.3rem;
  /* height: 0.68rem; */
  height: 0.37rem;
  padding: 0.15rem 0 0.16rem 0;
  font-size: 0.26rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  line-height: 0.37rem;
  letter-spacing: 0.01rem;
  border-bottom: 1px solid #4A5677;
}
.DetailsOfDisease .pc_subtitle {
  color: rgba(133, 139, 156, 1);
  display: inline-block;
  width: 1.69rem;
  margin-left: 0.19rem;
}
.DetailsOfDisease .pc_intro {
  color: #fff;
  display: inline-block;
}

.DetailsOfDisease .p_intro {
  /* margin: 0 0.32rem; */
  margin: 0 0;
  padding: 0.32rem 0.28rem 0.33rem 0.28rem;
  height: auto;
}
.DetailsOfDisease .p_intro_title_l {
  height: 0.45rem;
  font-size: 0.32rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #fff;
  line-height: 0.45rem;
}
.DetailsOfDisease .p_intro_font {
  font-size: 0.26rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #858B9C;
  line-height: 0.37rem;
  text-align: justify;
}

/* ******** card3 */
</style>

