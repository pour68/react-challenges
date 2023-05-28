import CompanyItem from "./CompanyItem";
import PropTypes from "prop-types";

const CompanyList = (props) => {
    const { companies, onCompanyChange, currentCompany } = props;

    return (<ul className="job__list">
        {
            companies.map(company => <CompanyItem key={company}
                company={company}
                onCompanyChange={onCompanyChange}
                currentCompany={currentCompany} />)
        }
    </ul>);
}

CompanyList.propTypes = {
    companies: PropTypes.array.isRequired,
    onCompanyChange: PropTypes.func.isRequired,
    currentCompany: PropTypes.string.isRequired
}

export default CompanyList;