/**
 * 出库单 模板设计选项
 */
export const OutStockOptions = [
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '销售单',
    value: '销售单',
    dragable: 0,
    resizable:0,
    defaultValue: '销售单',
    name: 'title',
    width: 790,
    height: 25,
    left: 0,
    top: 0,
    style:{FontSize:12,Alignment:"center"}
  },
  {
    type: 'braid-image',
    isEdit: 0,
    resizable: 1,
    dragable: 1,
    title: 'logo',
    value: 'https://zlt-project.oss-cn-hangzhou.aliyuncs.com/demo/QQ%E6%88%AA%E5%9B%BE20211224154608.png',
    defaultValue: 'https://zlt-project.oss-cn-hangzhou.aliyuncs.com/demo/QQ%E6%88%AA%E5%9B%BE20211224154608.png',
    name: 'logo',
    width:64,
    height:64,
    style:{"FontColor":"black"}
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '的莫',
    value: '的莫:{demo}',
    defaultValue: '的莫:{demo}',
    name: 'demo'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '自定义文本',
    value: '自定义文本',
    defaultValue: '自定义文本',
    name: 'def1'
  },
  {
    type: 'braid-txt',
    isEdit: 0,
    title: '公司名称',
    value: '{公司名称}',
    defaultValue: '某某公司',
    name: 'companyName'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '出库单号',
    value: '{出库单号}',
    dragable: 0,
    defaultValue: 'CK-1234567890',
    name: 'stockoutCode',
    width: 770,
    height: 25,
    left: 0,
    top: 0,
    style:{FontSize:12,Alignment:"center"}
  },
  {
    type: 'bar-code',
    isEdit: 1,
    title: '单号条码',
    value: '{单号}',
    defaultValue: 'CK-1234567890',
    name: 'barcode',
    lodopStyle: { QRCodeVersion: '1', QRCodeErrorLevel: 'L' },
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '客户/供应商',
    value: '{客户/供应商}',
    defaultValue: '中国苹果',
    name: 'unitName'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '经办人',
    value: '{经办人}',
    defaultValue: 'zj001',
    name: 'handlerName'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '出库类型',
    value: '{出库类型}',
    defaultValue: '销售出库',
    name: 'stockoutType'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '出库仓库',
    value: '{出库仓库}',
    defaultValue: '北京仓库',
    name: 'warehouseName'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '出库时间',
    value: '{出库时间}',
    defaultValue: '2020-08-27 12:00:00',
    name: 'businessDate'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '制单人',
    value: '{制单人}',
    defaultValue: 'jz002',
    name: 'createUserName'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '制单时间',
    value: '{制单时间}',
    defaultValue: '2020-08-27 12:00:00',
    name: 'created'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '收货人(销售)',
    value: '{收货人}',
    defaultValue: '刘某某',
    name: 'receivePerson'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '收货电话(销售)',
    value: '{收货人电话}',
    defaultValue: '收货人',
    name: 'receivePhone'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '收货地址(销售)',
    value: '{收货地址}',
    defaultValue: '四川成都',
    name: 'address'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '合计金额',
    value: '{合计金额}',
    defaultValue: '123.00',
    name: 'totalPrice'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '摘要',
    value: '{摘要}',
    defaultValue: '北京采购入库成都摘要',
    name: 'remark'
  },
  {
    type: 'braid-html',
    isEdit: 1,
    title: '分页',
    value: '{第##页/共##页}',
    defaultValue: '<font><span tdata=\'pageNO\'>第##页</span>/<span tdata=\'pageCount\'>共##页</span></font>',
    name: 'page'
  },
  {
    type: 'braid-table',
    isEdit: 0,
    dragable: 0,
    resizable: 0,
    title: '出库商品明细',
    name: 'details',
    value: '{details}',
    style: {},
    defaultValue: [
      {
        productName: '苹果ipone11pro',
        skuName: 'iphone11pro256g',
        specModel: '165L',
        quantity: 3,
        snCode: '[SPP1Y79G1]',
        price: '23.00'
      },
      {
        productName: '苹果ipone11pro',
        skuName: 'iphone11pro124g',
        specModel: '165L',
        quantity: 3,
        snCode: ' [SPP1Y79G1]',
        price: '12.00'
      }

    ],
    tabelHtml: '',
    columnsAttr: [
      {
        title: '产品名称',
        value: '{产品名称}',
        name: 'productName',
        order: 1
      },
      {
        title: 'sku名称',
        value: '{sku名称}',
        name: 'skuName',
        order: 2
      },
      {
        title: '规格型号',
        value: '{规格型号}',
        name: 'specModel',
        order: 3
      },
      {
        title: '数量',
        value: '{数量}',
        name: 'quantity',
        order: 4
      },
      {
        title: '单价',
        value: '{单价}',
        name: 'price',
        order: 5
      },
      {
        title: '产品序列号',
        value: '产品序列号明细：<br>{产品序列号}',
        name: 'snCode',
        trSet: {
          title: '产品序列号明细:',
          col: 5,
          margin: '50px'
        },
        order: 6
      }
    ],
    columns: []
  }
]

/**
 * 入库单 模板设计选项
 */
export const InStockOptions = [
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '自定义文本',
    value: '自定义文本',
    defaultValue: '自定义文本',
    name: ''
  },
  {
    type: 'braid-txt',
    isEdit: 0,
    title: '公司名称',
    value: '{公司名称}',
    defaultValue: '科技公司',
    name: 'companyName'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '入库单号',
    value: '{入库单号}',
    defaultValue: 'RK-1234567890',
    name: 'purcheckCode'
  },
  {
    type: 'bar-code',
    isEdit: 1,
    title: '单号条码',
    value: '{单号}',
    defaultValue: 'RK-1234567890',
    name: 'stockoutCode'
  },

  {
    type: 'braid-txt',
    isEdit: 1,
    title: '供应商/客户',
    value: '{供应商/客户}',
    defaultValue: '中国苹果',
    name: 'unitName'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '采购业务员',
    value: '{采购业务员}',
    defaultValue: 'zj001',
    name: 'purchaseSaleManName'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '入库类型',
    value: '{入库类型}',
    defaultValue: '采购入库',
    name: 'purcheckType'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '入库仓库',
    value: '{入库仓库}',
    defaultValue: '成都仓库',
    name: 'warehouseName'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '入库时间',
    value: '{入库时间}',
    defaultValue: '2020-08-27 12:00:00',
    name: 'businessDate'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '制单人',
    value: '{制单人}',
    defaultValue: 'jz002',
    name: 'createUserName'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '制单时间',
    value: '{制单时间}',
    defaultValue: '2020-08-27 12:00:00',
    name: 'created'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '摘要',
    value: '{摘要}',
    defaultValue: '北京采购入库成都摘要',
    name: 'remark'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '合计金额',
    value: '{合计金额}',
    defaultValue: '12331.00',
    name: 'totalPrice'
  },
  {
    type: 'braid-html',
    isEdit: 1,
    title: '分页',
    value: '{第##页/共##页}',
    defaultValue: '<font ><span tdata=\'pageNO\'>第##页</span>/<span tdata=\'pageCount\'>共##页</span></font>',
    name: ''
  },
  {
    type: 'braid-table',
    isEdit: 0,
    title: '入库商品明细',
    name: 'details',
    value: '{details}',
    style: {},
    defaultValue: [
      {
        productName: '苹果ipone11pro',
        skuName: 'iphone11pro256g',
        specModel: '165L',
        quantity: 3,
        snCode: '[SPP1Y79G1]',
        price: '12.00'
      },
      {
        productName: '苹果ipone11pro',
        skuName: 'iphone11pro124g',
        specModel: '165L',
        quantity: 3,
        snCode: '[SPP1Y79G1] ',
        price: '12.00'
      }

    ],
    columnsAttr: [
      {
        title: '产品名称',
        value: '{产品名称}',
        name: 'productName',
      },
      {
        title: 'sku名称',
        value: '{sku名称}',
        name: 'skuName',
      },
      {
        title: '规格型号',
        value: '{规格型号}',
        name: 'specModel'
      },
      {
        title: '数量',
        value: '{数量}',
        name: 'quantity'
      },
      {
        title: '单价',
        value: '{单价}',
        name: 'price'
      },
      {
        title: '产品序列号',
        value: '{产品序列号}',
        name: 'snCode',
      }
    ],
    columns: []
  }
]

export const SaleStockOutOptions = [
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '销售单',
    value: '销售单',
    dragable: 0,
    resizable:0,
    defaultValue: '销售单',
    name: 'title',
    width: 790,
    height: 25,
    left: 0,
    top: 0,
    style:{FontSize:12,Alignment:"center",ItemType:1}
  },
  {
    type: 'braid-image',
    isEdit: 0,
    resizable: 1,
    dragable: 1,
    title: 'logo',
    value: 'https://zlt-project.oss-cn-hangzhou.aliyuncs.com/demo/QQ%E6%88%AA%E5%9B%BE20211224154608.png',
    defaultValue: 'https://zlt-project.oss-cn-hangzhou.aliyuncs.com/demo/QQ%E6%88%AA%E5%9B%BE20211224154608.png',
    name: 'logo',
    width:64,
    height:64,
    style:{"FontColor":"black"}
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '单据编号',
    value: '单据编号：{no}',
    defaultValue: '单据编号：{no}',
    name: 'no'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '业务日期',
    value: '业务日期：{businessDate}',
    defaultValue: '业务日期：{businessDate}',
    name: 'businessDate'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '出库仓库',
    value: '出库仓库：{warehouseName}',
    defaultValue: '出库仓库：{warehouseName}',
    name: 'warehouseName',
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '客户名称',
    value: '客户名称：{customerName}',
    defaultValue: '客户名称：{customerName}',
    name: 'customerName',
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '经手人',
    value: '经手人：{employeeName}',
    defaultValue: '经手人：{employeeName}',
    name: 'employeeName'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '联系人',
    value: '联系人：{linkName}',
    defaultValue: '联系人：{linkName}',
    name: 'linkName'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '联系人电话',
    value: '联系人电话：{linkPhone}',
    defaultValue: '联系人电话：{linkPhone}',
    name: 'linkPhone'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '单位地址',
    value: '单位地址：{contactAddress}',
    defaultValue: '单位地址：{contactAddress}',
    name: 'contactAddress'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '制单时间',
    value: '制单时间：{createDate}',
    defaultValue: '制单时间：{createDate}',
    name: 'createDate'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '制单人',
    value: '制单人：{inputeName}',
    defaultValue: '制单人：{inputeName}',
    name: 'inputName'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '合计数量',
    value: '合计数量：{sumQty}',
    defaultValue: '合计数量：{sumQty}',
    name: 'sumQty'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '合计金额',
    value: '合计金额：{total}',
    defaultValue: '合计金额：{total}',
    name: 'total'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '其他费用',
    value: '其他费用：{otherFee}',
    defaultValue: '其他费用：{otherFee}',
    name: 'otherFee'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '总计金额',
    value: '总计金额：{realTotal}',
    defaultValue: '总计金额：{realTotal}',
    name: 'realTotal'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '折扣额',
    value: '折扣额：{discountTotal}',
    defaultValue: '折扣额：{discountTotal}',
    name: 'discountTotal'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '实收金额',
    value: '实收金额：{postTotal}',
    defaultValue: '实收金额：{postTotal}',
    name: 'postTotal'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '结算账户',
    value: '结算账户：{accountName}',
    defaultValue: '结算账户：{accountName}',
    name: 'accountName'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '本次欠款',
    value: '本次欠款：{curTotal}',
    defaultValue: '本次欠款：{curTotal}',
    name: 'curTotal'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '累计欠款',
    value: '累计欠款：{arTotal}',
    defaultValue: '累计欠款：{arTotal}',
    name: 'arTotal'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '公司名称',
    value: '公司名称：{companyName}',
    defaultValue: '公司名称：{companyName}',
    name: 'companyName'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '公司地址',
    value: '公司地址：{companyAddress}',
    defaultValue: '公司地址：{companyAddress}',
    name: 'companyAddress'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '公司电话',
    value: '公司电话：{companyPhone}',
    defaultValue: '公司电话：{companyPhone}',
    name: 'companyPhone'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '公司联系人',
    value: '公司联系人：{companyLinkName}',
    defaultValue: '公司联系人：{companyLinkName}',
    name: 'companyLinkName'
  },
  {
    type: 'braid-txt',
    isEdit: 0,
    title: '客户签名',
    value: '客户签名：{autograph}',
    defaultValue: '客户签名：{autograph}',
    name: 'autograph'
  },
  {
    type: 'braid-txt',
    isEdit: 1,
    title: '单据备注',
    value: '单据备注：{memo}',
    defaultValue: '单据备注：{memo}',
    name: 'memo'
  },
  {
    type: 'braid-html',
    isEdit: 0,
    title: '分页',
    value: '{第##页/共##页}',
    defaultValue: '<font><span tdata=\'pageNO\'>第##页</span>/<span tdata=\'pageCount\'>共##页</span></font>',
    name: 'page',
    width:100,
    height:16,
    style: {FontSize:9,Alignment:"center",ItemType:1}
  },
  {
    type: 'braid-table',
    isEdit: 0,
    dragable: 0,
    resizable: 0,
    title: '出库商品明细',
    name: 'details',
    value: '{details}',
    style: {},
    defaultValue: [
      {
        productName: '苹果ipone13pro',
        productNo: '111',
        specification: '256G',
        property: '红色',
        unitName: '部',
        qty: 1,
        multiUnitRelation:'',
        multiUnitResult:'',
        referPrice: 5000,
        price: 5000,
        total: 5000,
        taxRate: 13,
        taxTotal: 650,
        barcode:'qweewq',
        productMemo:'国行'
      },
      {
        productName: '苹果ipone13pro',
        productNo: '111',
        specification: '256G',
        property: '红色',
        unitName: '部',
        qty: 1,
        multiUnitRelation:'',
        multiUnitResult:'',
        referPrice: 5000,
        price: 5000,
        total: 5000,
        taxRate: 13,
        taxTotal: 650,
        barcode:'qweewq',
        productMemo:'国行'
      }
    ],
    tabelHtml: '',
    columnsAttr: [
      {
        title: '行号',
        value: '{_seq}',
        name: '_seq',
        order: 0
      },
      {
        title: '商品名称',
        value: '{productName}',
        name: 'productName',
        order: 1
      },
      {
        title: '商品编号',
        value: '{productNo}',
        name: 'productNo',
        order: 2
      },
      {
        title: '规格',
        value: '{specification}',
        name: 'specification',
        order: 3
      },
      {
        title: '属性',
        value: '{property}',
        name: 'property',
        order: 4
      },
      {
        title: '单位',
        value: '{unitName}',
        name: 'unitName',
        order: 5
      },
      {
        title: '数量',
        value: '{qty}',
        name: 'qty',
        order: 6
      },
      {
        title: '单位关系',
        value: '{multiUnitRelation}',
        name: 'multiUnitRelation',
        order: 7
      },
      {
        title: '辅助数量',
        value: '{multiUnitResult}',
        name: 'multiUnitResult',
        order: 8
      },
      {
        title: '参考价',
        value: '{referPrice}',
        name: 'referPrice',
        order: 9
      },
      {
        title: '单价',
        value: '{price}',
        name: 'price',
        order: 10
      },
      {
        title: '金额',
        value: '{total}',
        name: 'total',
        order: 11
      },
      {
        title: '税率',
        value: '{taxRate}',
        name: 'taxRate',
        order: 12
      },
      {
        title: '税额',
        value: '{taxTotal}',
        name: 'taxTotal',
        order: 13
      },
      {
        title: '条形码',
        value: '{barcode}',
        name: 'barcode',
        order: 14
      },
      {
        title: '商品备注',
        value: '{productMemo}',
        name: 'productMemo',
        order: 15
      }
    ],
    columns: []
  }
]