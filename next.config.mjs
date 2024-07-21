/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {protocol:'https',
                hostname: 'beeniewords.com',
            },
            {protocol:'https',
                hostname: 'i0.wp.com',
            },
            {protocol:'https',
                hostname: 'koolictrends.blogspot.com',
            },
            {protocol:'https',
                hostname: 'www.disturbingafrica.net',
            },
            {protocol:'https',
                hostname: 'ghmusichype.com',
            },
            {
                protocol:'https',
                hostname:'blogger.googleusercontent.com'
            }
        ]
    }
};

export default nextConfig;
