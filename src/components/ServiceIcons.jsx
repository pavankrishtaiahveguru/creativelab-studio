const Icon = ({ type }) => <div className={`service-icon ${type}`} />;

export const serviceIcons = {
branding:()=><Icon type="branding"/>,
creativeProduction:()=><Icon type="creative"/>,
digitalMarketing:()=><Icon type="marketing"/>,
webDesign:()=><Icon type="web"/>,
digitalDesign:()=><Icon type="digital"/>,
productDesign:()=><Icon type="product"/>,
interiors:()=><Icon type="interiors"/>,
corporateBranding:()=><Icon type="corporate"/>
};