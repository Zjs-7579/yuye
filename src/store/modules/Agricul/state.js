export default {
  userName: "", //姓名
  userTaskId: "", //task_id
  inancialType: "",
  inancialTypeSum: "",
  isDisabledData: false, //判断用户查看是否可写
  isHoldInfo: true, //近三年支持情况判断
  //isCountableUpload: true,//判断贷款中的下载附件是否显示
  isDetailsContent: true, //判断detailsInfo的锚点是否显示
  //用户上传的附件
  uploadUrlData: [
    { title: "项目申请书", data: [] },
    { title: "承诺书", data: [] },
    { title: "企业法定代表人或主要负责人及身份证复印件", data: [] },
    { title: "近3个年度的会计报表：资产负债表、损益表、现金流量表", data: [] },
    { title: "税务部门提供的单位上年度完税证明复印件", data: [] },
    {
      title: "企业与银行签订的贷款合同和有关银行贷款有效凭据(银行拨款单)复印件",
      data: [],
    },
    { title: "企业归还银行贷款利息清单", data: [] },
  ],
  //用户的基本信息
  AgriculData: {
    agriculturalCompany: {
      //task_id: "",
      task_name: "",
      unit_name: "",
      unit_address: "",

      project_address: "",
      website: "",
      director: "",
      director_phone: "",
      fax: "",
      e_mail: "",

      register_time: "",
      register_addr: "",

      social_code: "",
      // organization_code: "",
      industry_code: "",
      industry: "",
      proprietary: "",
      registered_capital: "",
      paid_capital: "",
      // national_tax_certificate: "",
      // local_tax_certificate: "",
      // business_no: "",
      business_range: "",
      major_products: "",
      unit_professional: "",
    },
    //2020 2019 2018
    agriculturalFinance: [
      {
        // actual_pref_taxes: 1332
        // business_income: "333"
        // business_tax_pref: "333"
        // create_time: "2021-12-24 03:52:25"
        // creator: "严伟"
        // depreciation: "333"
        // fixed_assets: "333"
        // government_loan: "333"
        // high_tech_exports: "333"
        // high_tech_income: "333"
        // id: "46"
        // income_tax: "333"
        // income_tax_pref: "333"
        // investment_amount: "333"
        // liability_ratio: "333"
        // main_business_income: "333"
        // main_business_profit: "333"
        // main_business_rate: "333"
        // main_income_rate: "333"
        // modifier: "严伟"
        // nterprise_added: NaN
        // other_pref: "333"
        // other_taxes: "333"
        // overdue: "333"
        // personal_tax: "333"
        // pro_year: 2020
        // profit: "333"
        // task_id: 744
        // taxes_payable: NaN
        // technology_inv: "333"
        // total_assets: "333"
        // total_exports: "333"
        // total_liabilities: "333"
        // total_net_cash: "333"
        // turnover: null
        // update_time: "2021-12-24 03:52:25"
        // value_added_pref: "333"
        // value_added_tax: "333"
        // wages: "333"
        //task_id: '',
        pro_year: "",
        business_income: "",
        main_business_income: "",
        high_tech_income: "",
        main_income_rate: "",
        total_exports: "",
        high_tech_exports: "",
        nterprise_added: "",
        wages: "",
        depreciation: "",
        profit: "",
        main_business_profit: "",
        main_business_rate: "",
        taxes_payable: "",
        income_tax: "",
        personal_tax: "",
        value_added_tax: "",
        turnover: "",
        other_taxes: "",
        actual_pref_taxes: "",
        income_tax_pref: "",
        value_added_pref: "",
        business_tax_pref: "",
        other_pref: "",
        total_assets: "",
        total_net_cash: "",
        total_liabilities: "",
        liability_ratio: "",
        fixed_assets: "",
        investment_amount: "",
        technology_inv: "",
        government_loan: "",
        overdue: "",
      },
      {
        //task_id: '',
        pro_year: "",
        business_income: "",
        main_business_income: "",
        high_tech_income: "",
        main_income_rate: "",
        total_exports: "",
        high_tech_exports: "",
        nterprise_added: "",
        wages: "",
        depreciation: "",
        profit: "",
        main_business_profit: "",
        main_business_rate: "",
        taxes_payable: "",
        income_tax: "",
        personal_tax: "",
        value_added_tax: "",
        turnover: "",
        other_taxes: "",
        actual_pref_taxes: "",
        income_tax_pref: "",
        value_added_pref: "",
        business_tax_pref: "",
        other_pref: "",
        total_assets: "",
        total_net_cash: "",
        total_liabilities: "",
        liability_ratio: "",
        fixed_assets: "",
        investment_amount: "",
        technology_inv: "",
        government_loan: "",
        overdue: "",
      },
      {
        //task_id: '',
        pro_year: "",
        business_income: "",
        main_business_income: "",
        high_tech_income: "",
        main_income_rate: "",
        total_exports: "",
        high_tech_exports: "",
        nterprise_added: "",
        wages: "",
        depreciation: "",
        profit: "",
        main_business_profit: "",
        main_business_rate: "",
        taxes_payable: "",
        income_tax: "",
        personal_tax: "",
        value_added_tax: "",
        turnover: "",
        other_taxes: "",
        actual_pref_taxes: "",
        income_tax_pref: "",
        value_added_pref: "",
        business_tax_pref: "",
        other_pref: "",
        total_assets: "",
        total_net_cash: "",
        total_liabilities: "",
        liability_ratio: "",
        fixed_assets: "",
        investment_amount: "",
        technology_inv: "",
        government_loan: "",
        overdue: "",
      },
    ],
    agriculturalPers: {
      //task_id: "",
      contacts: "",
      birth: "",
      highest_education: "",
      major: "",
      phone: "",
      mobile_phone: "",
      identity: "",
      resume: "",
    },
    agriculturalShareholder: [
      {
        //task_id: "",
        shareholder: "",
        amount: "",
        share_proportion: "",
      },
    ],
    agriculturalSupport: [
      {
        //task_id: '',
        project_name: "",
        funding_unit: "",
        funding_year: "",
        release_no: "",
        subsidy_amount: "",
        project_leader: "",
        phone: "",
        project_content: "",
        project_years: "",
        accept: "",
        reasons: "",
        //creator: '',
        // create_time: "",
        // modifier: '',
        // update_time: ''
      },
    ],
    agriculturalLoan: [
      {
        //task_id: '',
        loan_bank: "",
        loan_purpose: "",
        loan_amount: "",
        repayment_amount: "",
        loan_interest: "",
        discount_amount: "",
        // total_loan: '',
        // total_repay: '',
        // total_interest: '',
        // total_discount: '',
        //creator: '',
        // create_time: "",
        // modifier: '',
        // update_time: ''
      },
    ],
    imageIds: [],
  },
};
