export default function componentStyleOverrides(theme) {
  const bgColor = theme.colors?.grey50;
  return {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          color: '#FFFFFF',
          fontWeight: 500,
          borderRadius: '4px',
          margin: '0px 2px',
          boxshadow: 'none',
        },
        outlined: {
          color: theme.colors?.primaryDark,
          backgroundColor: '#FFFFFF',
          '&:hover': {
            backgroundColor: theme.colors?.secondary100,
          }
        },
        contained: {
          '&:hover': {
            backgroundColor: theme.colors?.secondaryDark,
          }
        }
      }
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          backgroundImage: 'none'
        },
        rounded: {
          borderRadius: `${theme?.customization?.borderRadius}px`
        }
      }
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          color: theme.colors?.textDark,
          padding: '24px'
        },
        title: {
          fontSize: '1.125rem'
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '24px'
        }
      }
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: '24px'
        }
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: theme.darkTextPrimary,
          paddingTop: '10px',
          paddingBottom: '10px',
          '&.Mui-selected': {
            color: theme.menuSelected,
            backgroundColor: theme.menuSelectedBack,
            '&:hover': {
              backgroundColor: theme.menuSelectedBack
            },
            '& .MuiListItemIcon-root': {
              color: theme.menuSelected
            }
          },
          '&:hover': {
            backgroundColor: theme.menuSelectedBack,
            color: theme.menuSelected,
            '& .MuiListItemIcon-root': {
              color: theme.menuSelected
            }
          }
        }
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: theme.darkTextPrimary,
          minWidth: '36px'
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: theme.textDark
        }
      }
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
        //   borderStyle: 'none',
        //   '&.edt-tbl': {
        //   },  //[#//]
        },
        // columnHeaderTitle: {
        //   fontWeight: 600,
        // },
        row: {
          '&.ipmoe-req-status--Ordered': {
            backgroundColor: theme.colors?.primaryLight,  //[#//]
          },
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        size: 'small',  //[#//]
        InputLabelProps: {
          shrink: true,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            color: theme.colors?.grey600,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: theme.textDark,
          padding: '2px 0 4px',  //[#//]request filter start/end date
          '&::placeholder': {
            color: theme.darkTextSecondary,
            fontSize: '0.875rem'
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: bgColor,
          borderRadius: `${theme?.customization?.borderRadius}px`,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.colors?.grey400
          },
          '&:hover $notchedOutline': {
            borderColor: theme.colors?.primaryLight
          },
          '&.MuiInputBase-multiline': {
            padding: 1
          },
          '&.Mui-disabled': {
            '& .MuiOutlinedInput-notchedOutline': {
              // borderWidth: '0px', //[#T4/1/4]ok
            },
          },
        },
        input: {
          fontWeight: 500,
          background: bgColor,
          padding: '15.5px 14px',
          borderRadius: `${theme?.customization?.borderRadius}px`,
          '&.MuiInputBase-inputSizeSmall': {
            padding: '10px 14px',
            '&.MuiInputBase-inputAdornedStart': {
              paddingLeft: 0
            }
          },
          '&.Mui-disabled': {
            WebkitTextFillColor: theme.colors?.grey700, //[#//]
          },
        },
        inputAdornedStart: {
          paddingLeft: 4
        },
        notchedOutline: {
          borderRadius: `${theme?.customization?.borderRadius}px`
        }
      }
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            color: theme.colors?.grey300
          }
        },
        mark: {
          backgroundColor: theme.paper,
          width: '4px'
        },
        valueLabel: {
          color: theme?.colors?.primaryLight
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: theme.divider,
          opacity: 1
        }
      }
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          color: theme.colors?.primaryDark,
          background: theme.colors?.primary200
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          '&.MuiChip-deletable .MuiChip-deleteIcon': {
            color: 'inherit'
          }
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: theme.paper,
          background: theme.colors?.grey700
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#0B77B5',
        },
      }
    }
  };
}
