<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'assemblyHome');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '}>M]GpQ8cZXW*lIP+VaFW{~](oz3gJH2Hdbk!<$%]eA_&QE7C$V czl oj,z8Fh;');
define('SECURE_AUTH_KEY',  'w[W[:tS4N[~LBl?iD!vqKrt]O.PPW~^gO0$Zhy=$E<)r:wpOfxCc<]`E*hO|RtC,');
define('LOGGED_IN_KEY',    'KDm;ia?2P:3(:!$OQr`-X)0QKsXpjno)@+4R.,1o^O1rW[Manc:DK~GPa]-Xal6u');
define('NONCE_KEY',        'xvP[>1#9/xqF9,!7{^C?}aK=~Bg{d|L+*`:2wcfR,_Wj$H[~WCX[n#~,;J==c+4 ');
define('AUTH_SALT',        'yGd#lEbx;4D*K3fOxF(Kl`J!B(]P}zj<+t{}`GcHr5B;%x]TffJT76:+hBI&2OK2');
define('SECURE_AUTH_SALT', '9Dkp/@IUAOx#|rnIW!`o `tRRP4{@++g;-pp63|*zauz8+ZWIUjheM-{tH:jFS<K');
define('LOGGED_IN_SALT',   '5m8G;/=^h>]b6`7U|@p:(j]AW@&WCe+c{gVyZ`S0m{!>qOK<nA>~>wsbqsiY./L9');
define('NONCE_SALT',       '<Xl_|$+.h/AqWjTQ2XoV4L> `=tKL~v9N.!4dU<To!@/R;R5Hv#sG62nX+WW`/mC');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
