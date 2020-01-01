const fs = require('fs');
const path = require('path');

const solutionsListInfo = fs.readFileSync(path.join(__dirname, '../resources', 'solutions-list.txt'), { encoding: 'utf8' });
const solutionsInfo = fs.readFileSync(path.join(__dirname, '../resources', 'solutions.txt'), { encoding: 'utf8' });

const getSolutionsList = () => {
    let solutions = solutionsListInfo.split('\n');
    solutions = solutions.map((solution) => {
        return {
            title: solution,
            solution: titleReplace(solution)
        }
    });
    return solutions;
};

const getSolutionInfo = (solution) => {
    const solutions = solutionsInfo.split('--');
    const item = solutions.find((data) => {
        return titleReplace(data.split(':')[0]) === solution;
    });
    if(!item) {
        return 'NA';
    }
    let result = item.split(':');
    result = result[1];
    return String(result).trim();
};

function titleReplace(value) {
    return value.trim().replace(/\s+/g, '-').toLowerCase();
}

module.exports = {
    getSolutionsList,
    getSolutionInfo
}