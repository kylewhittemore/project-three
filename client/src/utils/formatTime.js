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
            const response = convertedDate.format("ddd, MMM Do YYYY")
            return response

    }

export function shortFmt(datetime) {
            let convertedDate = moment(datetime, "YYYY-MM-DDTHH:mm:ss.SSS")
            const response = convertedDate.format("MM/DD/YY")
            return response

    }

export default { diffNow, longFmt, shortFmt }
