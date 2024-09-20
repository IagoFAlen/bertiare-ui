export function getVariantCircleBasedOnProgress(progressNumber: number){

    if(progressNumber >= 80)
        return 'high'

    if(progressNumber <= 50)
        return 'low'

    return 'medium'
}