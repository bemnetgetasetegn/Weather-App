

export const TwelveHrFormat = (time24:string | undefined):string => {
    if(!time24) return ''

    const [hr, min] = time24?.split(':');
    let hour = parseInt(hr)
    let minute = parseInt(min)

    const period = hour >= 12 ? 'PM' : 'AM'

    hour = hour % 12
    if(hour === 0) hour = 12

    const minPadded = minute.toString().padStart(2, '0')

    return `${hour}:${minPadded} ${period}`

}