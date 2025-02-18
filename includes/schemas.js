// Name of Databases
const stg_project = 'stg-fit'
const ods_project = 'ods-fit'
const dw_project = 'dw-fit-450902'
// Name of Schemas
const sfs = 'sfs'

// Name of tables in staging
const stg_goalkeepers = 'goalkeepers'
const stg_defenders = 'defenders'
const stg_midfielders = 'midfielders'
const stg_forwards = 'forwards'
const stg_all_players = 'all_players'


// Name of tables in ods

// Log Tables
const ods_goalkeepers_log = 'goalkeepers_log'
const ods_defenders_log = 'defenders_log'
const ods_midfielders_log = 'midfielders_log'
const ods_forwards_log = 'forwards_log'
const ods_all_players_log = 'all_players_log'

// Ods Tables
const ods_goalkeepers = 'goalkeepers'
const ods_defenders = 'defenders'
const ods_midfielders = 'midfielders'
const ods_forwards = 'forwards'
const ods_all_players = 'all_players'

// DW tables
const dw_all_players = 'all_players'
const dw_teams = 'teams'

 module.exports = {
    //Export Projects
    stg_project,
    ods_project,
    dw_project,
    
    // Export Schemas
    sfs,
    
    // Export stg tables
    stg_goalkeepers,
    stg_defenders,
    stg_midfielders,
    stg_forwards,
    stg_all_players,

    // Export ods log tables
    ods_goalkeepers_log,
    ods_defenders_log,
    ods_midfielders_log,
    ods_forwards_log,
    ods_all_players_log,
    
    // Export ods tables
    ods_goalkeepers,
    ods_defenders,
    ods_midfielders,
    ods_forwards,
    ods_all_players,

    // Export DW tables
    dw_all_players
    ,dw_teams
}