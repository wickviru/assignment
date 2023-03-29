import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

import AnalyticsSVG from '@/assets/icons/svg/chart.svg';
import AnalyticsActiveSVG from '@/assets/icons/svg/chart-1.svg';
import DashboardSVG from '@/assets/icons/svg/dashboard.svg';
import DashboardActiveSVG from '@/assets/icons/svg/dashboard-1.svg';
import SearchSVG from '@/assets/icons/svg/Icon feather-search.svg';
import NotificationsActiveSVG from '@/assets/icons/svg/Icon ionic-md-notifications-outline.svg';
import NotificationsSVG from '@/assets/icons/svg/Icon ionic-md-notifications-outline-1.svg';
import LinkedInSVG from '@/assets/icons/svg/Icon simple-linkedin.svg';
import InterviewsSVG from '@/assets/icons/svg/interview.svg';
import InterviewsActiveSVG from '@/assets/icons/svg/interview-1.svg';
import CandidatesSVG from '@/assets/icons/svg/job.svg';
import CandidatesActiveSVG from '@/assets/icons/svg/job-1.svg';
import LogoSVG from '@/assets/icons/svg/logo.svg';
import SettingsActiveSVG from '@/assets/icons/svg/settings.svg';
import SettingsSVG from '@/assets/icons/svg/settings-1.svg';

const getSVG = (path: string, style: React.CSSProperties = {}) => (
  <img src={path} alt="Icon" style={{ ...style }}></img>
);

export const DashboardIcon = (
  props: Partial<CustomIconComponentProps> & { iconstyle?: React.CSSProperties },
) => <Icon component={() => getSVG(DashboardSVG, props.iconstyle)} {...props} />;

export const DashboardActiveIcon = (
  props: Partial<CustomIconComponentProps> & { iconstyle?: React.CSSProperties },
) => <Icon component={() => getSVG(DashboardActiveSVG, props.iconstyle)} {...props} />;

export const InterviewsIcon = (
  props: Partial<CustomIconComponentProps> & { iconstyle?: React.CSSProperties },
) => <Icon component={() => getSVG(InterviewsSVG, props.iconstyle)} {...props} />;

export const InterviewsActiveIcon = (
  props: Partial<CustomIconComponentProps> & { iconstyle?: React.CSSProperties },
) => <Icon component={() => getSVG(InterviewsActiveSVG, props.iconstyle)} {...props} />;

export const NotificationsIcon = (
  props: Partial<CustomIconComponentProps> & { iconstyle?: React.CSSProperties },
) => <Icon component={() => getSVG(NotificationsSVG, props.iconstyle)} {...props} />;

export const NotificationsActiveIcon = (
  props: Partial<CustomIconComponentProps> & { iconstyle?: React.CSSProperties },
) => (
  <Icon component={() => getSVG(NotificationsActiveSVG, props.iconstyle)} {...props} />
);

export const SettingsIcon = (
  props: Partial<CustomIconComponentProps> & { iconstyle?: React.CSSProperties },
) => <Icon component={() => getSVG(SettingsSVG, props.iconstyle)} {...props} />;

export const SettingsActiveIcon = (
  props: Partial<CustomIconComponentProps> & { iconstyle?: React.CSSProperties },
) => <Icon component={() => getSVG(SettingsActiveSVG, props.iconstyle)} {...props} />;

export const AnalyticsIcon = (
  props: Partial<CustomIconComponentProps> & { iconstyle?: React.CSSProperties },
) => <Icon component={() => getSVG(AnalyticsSVG, props.iconstyle)} {...props} />;

export const AnalyticsActiveIcon = (
  props: Partial<CustomIconComponentProps> & { iconstyle?: React.CSSProperties },
) => <Icon component={() => getSVG(AnalyticsActiveSVG, props.iconstyle)} {...props} />;
export const CandidatesRolesIcon = (
  props: Partial<CustomIconComponentProps> & { iconstyle?: React.CSSProperties },
) => <Icon component={() => getSVG(CandidatesSVG, props.iconstyle)} {...props} />;

export const CandidatesRolesActiveIcon = (
  props: Partial<CustomIconComponentProps> & { iconstyle?: React.CSSProperties },
) => <Icon component={() => getSVG(CandidatesActiveSVG, props.iconstyle)} {...props} />;

export const LogoIcon = (
  props: Partial<CustomIconComponentProps> & { iconstyle?: React.CSSProperties },
) => <Icon component={() => getSVG(LogoSVG, props.iconstyle)} {...props} />;

export const SearchIcon = (
  props: Partial<CustomIconComponentProps> & { iconstyle?: React.CSSProperties },
) => <Icon component={() => getSVG(SearchSVG, props.iconstyle)} {...props} />;

export const LinkedInIcon = (
  props: Partial<CustomIconComponentProps> & { iconstyle?: React.CSSProperties },
) => <Icon component={() => getSVG(LinkedInSVG, props.iconstyle)} {...props} />;
