const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return graphql(
        `
            query getCurrentLineUp {
                rwconf {
                    lineUps {
                        id
                        year
                        month
                    }
                }
            }
        `,
        { limit: 1000 }
    ).then(result => {
        result.data.rwconf.lineUps.forEach(lineUp => {
            createPage({
                path: `${lineUp.year}/${lineUp.month}`,
                component: path.resolve(`./src/templates/archive.js`),
                context: {
                    id: lineUp.id,
                    year: lineUp.year,
                    month: lineUp.month
                }
            });
        });
    });
};

exports.onCreatePage = ({ page, actions }) => {
    const { createPage, deletePage } = actions;

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    deletePage(page);

    createPage({
        ...page,
        context: {
            currentYear,
            currentMonth
        }
    });
};
