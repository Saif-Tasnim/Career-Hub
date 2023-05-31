const loaderData = (id) => {

    return fetch('../../../public/job_data.json')
        .then(res => res.json())
        .then(data => {
            const findData = data.find(d => d.companyName === id);
            return findData;
        });
};


export default loaderData;