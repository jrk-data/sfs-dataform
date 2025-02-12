// Name of Databases
const stg_project = 'stg-fit'
const ods_project = 'ods-fit'

// Name of Schemas
const sfs = 'sfs'

// Name of tables in staging
const stg_goalkeepers = 'goalkeepers'
const stg_defenders = 'defenders'
const stg_midfielders = 'midfielders'
const stg_forwards = 'forwards'


// Name of tables in ods

// Log Tables
const ods_goalkeepers_log = 'goalkeepers_log'
const ods_defenders_log = 'defenders_log'
const ods_midfielders_log = 'midfielders_log'
const ods_forwards_log = 'forwards_log'

// Final Tables
const ods_goalkeepers = 'goalkeepers'
const ods_defenders = 'defenders'
const ods_midfielders = 'midfielders'
const ods_forwards = 'forwards'

 module.exports = {
    //Export Projects
    stg_project,
    ods_project,

    // Export Schemas
    sfs,
    
    // Export stg tables
    stg_goalkeepers,
    stg_defenders,
    stg_midfielders,
    stg_forwards,

    // Export ods log tables
    ods_goalkeepers_log,
    ods_defenders_log,
    ods_midfielders_log,
    ods_forwards_log,

    // Export ods tables
    ods_goalkeepers,
    ods_defenders,
    ods_midfielders,
    ods_forwards
}