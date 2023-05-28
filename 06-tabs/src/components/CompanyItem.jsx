import PropTypes from "prop-types";

const CompanyItem = (props) => {
    const { company, onCompanyChange, currentCompany } = props;

    return (<li className={currentCompany === company ? "job__item active" : "job__item"}
        onClick={() => onCompanyChange(company)}>
        {company}
    </li>);
}

CompanyItem.propTypes = {
    company: PropTypes.string,
    onCompanyChange: PropTypes.func,
    currentCompany: PropTypes.string
}

export default CompanyItem;