function superbowlWin(record){
    const run = record.find(record => record.result === "W")
    if (run){
        return run.year
    }
}