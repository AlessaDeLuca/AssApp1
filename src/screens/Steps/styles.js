import { StyleSheet, Dimensions } from 'react-native';
import { homeStyle, performance } from '../../AppStyles';

// screen sizing
const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width < height ? width : height;

const styles = StyleSheet.create({
  container: homeStyle.container,
  titleContainer: homeStyle.titleContainer,
  title: homeStyle.title,
  stepsText: homeStyle.blueText,
  mainText: homeStyle.mainText,
  secText: homeStyle.secText,
  detailsContainer: performance.detailsContainer,
  performanceContainer: performance.performanceContainer,
  performanceContainerBorderless: performance.performanceContainerBorderless,
  performanceRowContainer: performance.performanceRowContainer,
  performanceIcon: performance.performanceIcon,
  performanceTextContainer: performance.performanceTextContainer,
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
    marginLeft: 30,
    marginRight: 40
  },
  columnContainer: {
    flexDirection: 'column',
    alignSelf: 'stretch'
  },
  line: {
    width: 1,
    height: 40,
    backgroundColor: 'silver',
    marginLeft: 20,
    marginRight: 20
  },
  circleContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
    width: SCREEN_WIDTH - 100
  },
  circleText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 30,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  circleImg: {
    width: 30,
    height: 30,
    alignSelf: 'center'
  },
  chartContainer: {
    height: 400,
    borderColor: '#000',
    borderWidth: 1
  },
  statisticContainer: {
    backgroundColor: '#ffff',
    borderRadius: 10,
    width: '100%',
    padding: 20,
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 20
  },
  statisticTxt: { ...homeStyle.mainText, margin: 10 },
  goalAchievedIcon: {
    width: 30,
    height: 30,
    margin: 20,
    alignSelf: 'center'
  },
  calendarConteiner: {
    marginTop: 20,
    justifyContent: 'flex-end',
    height: 60,
    flex: 1
  },
  buttonCalendar: {
    marginTop: 10,
    width: SCREEN_WIDTH - 100,
    height: 50,
    borderWidth: 1,
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#0288d1',
    borderColor: '#0288d1',
    borderRadius: 60,
    alignSelf: 'center'
  },
  btnText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold'
  }
});

export default styles;
