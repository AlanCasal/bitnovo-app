import { LIGHT_GRAY_6, MULISH_400, MULISH_700 } from '@/src/utils/common';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 413,
    padding: 20,
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 24,
  },
  modalContentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 40, 89, 0.5)', // Dark semi-transparent overlay
  },
  checkIcon: {
    width: 80,
    height: 80,
    alignSelf: 'center',
  },
  modalTitle: {
    fontFamily: MULISH_700,
    fontSize: 26,
    textAlign: 'center',
    marginVertical: 16,
  },
  modalDescription: {
    fontFamily: MULISH_400,
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 20,
    letterSpacing: 0.01,
    color: LIGHT_GRAY_6,
    marginBottom: 24,
  },
});
