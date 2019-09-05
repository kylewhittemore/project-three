import moment from 'moment';
    
export function diffNow(datetime) {
        let convertedDate = moment(datetime, "YYYY-MM-DDTHH:mm:ss.SSS")
        convertedDate.fromNow()
        let delta = convertedDate.diff(moment(), "days")
        let response = delta + " days ago"
        return response
    }

export function longFmt(datetime) {
            let convertedDate = moment(datetime, "YYYY-MM-DDTHH:mm:ss.SSS")
            const response = convertedDate.format("dddd, MMMM Do YYYY")
            return response

    }

export default { diffNow, longFmt }
